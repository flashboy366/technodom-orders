import fetchTengeToRubleRate from '../api/fetchTengeToRubleRate'
import ProductData, { emptyProductData } from '../types/ProductData'
import SERVER from '../constants/server'

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
    priceInRubles = Math.trunc(priceInTenge / tengeToRubleRate)
  } else priceInRubles = 0
  return priceInRubles
}

interface ParseIHerbParameters {
  productURL: string
}
export const parseIHerb = async ({
  productURL,
}: ParseIHerbParameters): Promise<ProductData> => {
  const productData: ProductData = { ...emptyProductData }

  const productURLObj = new URL(productURL)
  const productURLPathname = productURLObj.pathname
  const productURLPathnameArray = productURLPathname.split('/')
  const productID = productURLPathnameArray.slice(-1)[0]

  const productDataResponse = await fetch(
    SERVER.URL +
      'product_data?' +
      new URLSearchParams({
        productURL:
          'https://catalog.app.iherb.com/recommendations/freqpurchasedtogether?productId=' +
          productID,
      })
  )
  const data = await productDataResponse.json()
  const productDataJSON = JSON.parse(data)
  const productJSON = productDataJSON.originProduct

  productData.productTitle = productJSON.name
  productData.productPriceInTenge = productJSON.discountedPriceAmount
  productData.productPriceInRubles = await convertTengeToRubles({
    priceInTenge: productData.productPriceInTenge,
  })

  return productData
}
