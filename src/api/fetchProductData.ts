import ProductData, { emptyProductData } from '../types/ProductData'
import { parseIHerb } from '../util/shopParsers'

interface FetchProductDataParameters {
  productURL: string
}

export const fetchProductData = async ({
  productURL,
}: FetchProductDataParameters): Promise<ProductData> => {
  let productData: ProductData = { ...emptyProductData }
  if (productURL === '') {
    return productData
  }

  productData = await parseIHerb({ productURL })

  return productData
}
