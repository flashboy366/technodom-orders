import ProductData, { emptyProductData } from './ProductData'

export default interface Product {
  id: number
  productURL: string
  quantity: number
  productData: ProductData
}

export const emptyProduct: Product = {
  id: 0,
  productURL: '',
  productData: emptyProductData,
  quantity: 1,
}
