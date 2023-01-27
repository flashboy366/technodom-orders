import SERVER from '../constants/server'
import ProductData, { emptyProductData } from '../types/ProductData'
import fetchTengeToRubleRate from './fetchTengeToRubleRate'
import FINANCIAL from '../constants/financial'
import TECHNODOM from '../constants/technodom'

export const fetchProductData = async (
  productArticle: number
): Promise<ProductData> => {
  const productData: ProductData = { ...emptyProductData }
  if (productArticle === 0) {
    return productData
  }

  const productDataResponse = await fetch(
    SERVER.URL +
      'product_data?' +
      new URLSearchParams({ productArticle: productArticle.toString() })
  )
  const data = await productDataResponse.json()
  const parser = new DOMParser()
  const productPageDocument = parser.parseFromString(data, 'text/html')

  productData.productUrl = SERVER.PRODUCT_URL + productArticle.toString()

  productData.productTitle =
    getFirstElementTextWithClass(productPageDocument, 'product-info__header') ??
    ''
  productData.productPriceInTenge = parseInt(
    (
      getFirstElementTextWithClass(
        productPageDocument,
        'product-actions__price product-prices'
      ) ?? ''
    )
      .split(/\s/)
      .join('')
  )
  productData.productPriceInTengeLabel =
    getFirstElementTextWithClass(
      productPageDocument,
      'product-actions__price product-prices'
    ) ?? ''
  const tengeToRubleRate = await fetchTengeToRubleRate()
  if (productData.productPriceInTenge) {
    productData.productPriceInRubles = Math.trunc(
      (productData.productPriceInTenge / tengeToRubleRate) *
        FINANCIAL.EXTRA_CHARGE_COEFFICIENT
    )
  } else productData.productPriceInRubles = 0

  try {
    const rawProductImgSrc =
      productPageDocument
        .getElementsByClassName('slide selected')[0]
        .getElementsByTagName('img')[0].src ?? ''
    const rawProductImgUrl = new URL(rawProductImgSrc)
    let productImgUrl = rawProductImgSrc.replace(rawProductImgUrl.host, '')
    productImgUrl = productImgUrl.replace(rawProductImgUrl.protocol, '')
    productImgUrl = productImgUrl.replace('//', '')
    productData.productImgUrl = TECHNODOM.DOMAIN + productImgUrl
  } catch (err) {
    console.log(err)
  }

  return productData
}

const getFirstElementTextWithClass = (
  pageDocument: Document,
  className: string
) => pageDocument?.getElementsByClassName(className)[0]?.firstChild?.textContent
