import ProductData, { emptyProductData } from './ProductData'

export default interface Product {
  id: number
  article: number | undefined
  quantity: number | undefined
  productData: ProductData
}

export const emptyProduct: Product = {
  id: 0,
  article: undefined,
  productData: emptyProductData,
  quantity: 1,
}
