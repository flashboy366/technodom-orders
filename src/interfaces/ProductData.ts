export default interface ProductData {
  productTitle: string
  productPriceLabel: string
  productPrice: number
  productPriceInRubles: number
}

export const emptyProductData: ProductData = {
  productTitle: '',
  productPriceLabel: '',
  productPrice: 0,
  productPriceInRubles: 0,
}
