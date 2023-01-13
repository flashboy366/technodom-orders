import SERVER from '../constants/server'
import ProductData from '../interfaces/ProductData'
import fetchTengeToRubleRate from './fetchTengeToRubleRate'
import FINANCIAL from '../constants/financial'

export const fetchProductData = async (
  productArticle: number
): Promise<ProductData> => {
  const productData: ProductData = {
    productTitle: '',
    productPriceLabel: '',
    productPrice: 0,
    productPriceInRubles: 0,
  }
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

  productData.productTitle =
    getFirstElementTextWithClass(productPageDocument, 'product-info__header') ??
    ''
  productData.productPrice = parseInt(
    (
      getFirstElementTextWithClass(
        productPageDocument,
        'product-actions__price product-prices'
      ) ?? ''
    )
      .split(/\s/)
      .join('')
  )
  productData.productPriceLabel =
    getFirstElementTextWithClass(
      productPageDocument,
      'product-actions__price product-prices'
    ) ?? ''
  const tengeToRubleRate = await fetchTengeToRubleRate()
  productData.productPriceInRubles = Math.trunc(
    (productData.productPrice / tengeToRubleRate) *
      FINANCIAL.EXTRA_CHARGE_COEFFICIENT
  )

  return productData
}

const getFirstElementTextWithClass = (
  pageDocument: Document,
  className: string
) => pageDocument?.getElementsByClassName(className)[0]?.firstChild?.textContent
