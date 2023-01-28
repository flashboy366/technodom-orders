import ProductData, { emptyProductData } from '../types/ProductData'
import { ChosenShop } from '../types/ChosenShop'
import { parseMechta, parseTechnodom } from '../util/shopParsers'

interface FetchProductDataParameters {
  chosenShop: ChosenShop
  productURL: string
}

export const fetchProductData = async ({
  chosenShop,
  productURL,
}: FetchProductDataParameters): Promise<ProductData> => {
  let productData: ProductData = { ...emptyProductData }
  if (productURL === '') {
    return productData
  }

  switch (chosenShop) {
    case 'technodom':
      productData = await parseTechnodom({ productURL })
      break
    case 'mechta':
      productData = await parseMechta({ productURL })
  }

  return productData
}
