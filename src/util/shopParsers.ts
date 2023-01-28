import fetchTengeToRubleRate from '../api/fetchTengeToRubleRate'
import FINANCIAL from '../constants/financial'
import ProductData, { emptyProductData } from '../types/ProductData'
import SERVER from '../constants/server'
import { SHOPS } from '../constants/shops'

const getFirstElementTextWithClass = (
  pageDocument: Document,
  className: string
) => pageDocument?.getElementsByClassName(className)[0]?.firstChild?.textContent

interface ConvertTengeToRublesParameters {
  priceInTenge: number
}
const convertTengeToRubles = async ({
  priceInTenge,
}: ConvertTengeToRublesParameters): Promise<number> => {
  let priceInRubles: number

  const tengeToRubleRate = await fetchTengeToRubleRate()
  if (priceInTenge) {
    priceInRubles = Math.trunc(
      (priceInTenge / tengeToRubleRate) * FINANCIAL.EXTRA_CHARGE_COEFFICIENT
    )
  } else priceInRubles = 0
  return priceInRubles
}

interface ParseTechnodomParameters {
  productURL: string
}
export const parseTechnodom = async ({
  productURL,
}: ParseTechnodomParameters): Promise<ProductData> => {
  const productData: ProductData = { ...emptyProductData }

  const productDataResponse = await fetch(
    SERVER.URL + 'product_data?' + new URLSearchParams({ productURL })
  )
  const data = await productDataResponse.json()
  const parser = new DOMParser()
  const productPageDocument = parser.parseFromString(data, 'text/html')

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

  productData.productPriceInRubles = await convertTengeToRubles({
    priceInTenge: productData.productPriceInTenge,
  })

  try {
    const rawProductImgSrc =
      productPageDocument
        .getElementsByClassName('slide selected')[0]
        .getElementsByTagName('img')[0].src ?? ''
    const rawProductImgUrl = new URL(rawProductImgSrc)
    let productImgUrl = rawProductImgSrc.replace(rawProductImgUrl.host, '')
    productImgUrl = productImgUrl.replace(rawProductImgUrl.protocol, '')
    productImgUrl = productImgUrl.replace('//', '')
    productData.productImgUrl = SHOPS.SHOP_URLS.technodom + productImgUrl
  } catch (err) {
    console.log(err)
  }

  return productData
}

interface ParseMechtaParameters {
  productURL: string
}
export const parseMechta = async ({
  productURL,
}: ParseMechtaParameters): Promise<ProductData> => {
  const productData: ProductData = { ...emptyProductData }
  const productURLObject = new URL(productURL)
  productURLObject.pathname = `api/v1${productURLObject.pathname}`

  const productDataResponse = await fetch(
    SERVER.URL +
      'product_data?' +
      new URLSearchParams({ productURL: productURLObject.href })
  )
  const data = JSON.parse(await productDataResponse.json()).data

  productData.productTitle = data.name
  productData.productPriceInTenge = data.price
  productData.productPriceInRubles = await convertTengeToRubles({
    priceInTenge: productData.productPriceInTenge,
  })
  productData.productImgUrl = data.photos[0]

  console.log(productData)

  return productData
}
