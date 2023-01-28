export default interface ProductData {
  productTitle: string
  productPriceInTengeLabel: string
  productPriceInTenge: number
  productPriceInRubles: number
  productImgUrl: string
}

export const emptyProductData: ProductData = {
  productTitle: '',
  productPriceInTengeLabel: '',
  productPriceInTenge: 0,
  productPriceInRubles: 0,
  productImgUrl: '',
}
