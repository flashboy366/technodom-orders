import Product from '../interfaces/Product'

const validateProduct = (product: Product) =>
  product.article !== 0 && product.quantity && product.quantity > 0

export default validateProduct
