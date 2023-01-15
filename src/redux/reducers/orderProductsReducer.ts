import Product, { emptyProduct } from '../../interfaces/Product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ProductData, { emptyProductData } from '../../interfaces/ProductData'

export interface OrderProductsState {
  products: Product[]
  productsPricesSum: number
  deliveryPrice: number
  totalPrice: number
}

const initialState: OrderProductsState = {
  products: [emptyProduct],
  productsPricesSum: 0,
  deliveryPrice: 500,
  totalPrice: 0,
}

export const orderProductsSlice = createSlice({
  name: 'orderProducts',
  initialState,
  reducers: {
    addProduct: state => {
      const lastProductIndex = state.products.length - 1
      const lastProduct = state.products[lastProductIndex]
      let newProductID
      if (lastProduct) {
        newProductID = lastProduct.id + 1
      } else newProductID = 0

      const newProduct: Product = {
        id: newProductID,
        article: undefined,
        quantity: 1,
        productData: emptyProductData,
      }
      state.products.push(newProduct)
      calculateProductsPricesSum(state)
    },

    setArticle: (
      state,
      action: PayloadAction<{ productID: number; article: number | undefined }>
    ) => {
      const targetProductIndex = getProductIndexByID(
        state,
        action.payload.productID
      )
      state.products[targetProductIndex].article = action.payload.article
      calculateProductsPricesSum(state)
    },

    setQuantity: (
      state,
      action: PayloadAction<{ productID: number; quantity: number }>
    ) => {
      const targetProductIndex = getProductIndexByID(
        state,
        action.payload.productID
      )
      state.products[targetProductIndex].quantity = action.payload.quantity
      calculateProductsPricesSum(state)
    },

    setProductData: (
      state,
      action: PayloadAction<{ productID: number; productData: ProductData }>
    ) => {
      const targetProductIndex = getProductIndexByID(
        state,
        action.payload.productID
      )
      state.products[targetProductIndex].productData =
        action.payload.productData
      calculateProductsPricesSum(state)
    },

    removeProduct: (state, action: PayloadAction<{ productID: number }>) => {
      const targetProductIndex = getProductIndexByID(
        state,
        action.payload.productID
      )
      state.products.splice(targetProductIndex, 1)
      calculateProductsPricesSum(state)
    },
  },
})

export const getProductIndexByID = (
  state: OrderProductsState,
  productID: number
) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const targetProduct = state.products.find(
    (product: Product) => product.id === productID
  )!
  return state.products.indexOf(targetProduct)
}

const calculateProductsPricesSum = (state: OrderProductsState) => {
  let newProductsPricesSum = 0
  state.products.map(product => {
    if (product.productData.productPriceInRubles)
      newProductsPricesSum +=
        product.quantity * product.productData.productPriceInRubles
  })
  state.productsPricesSum = newProductsPricesSum
  state.totalPrice = state.productsPricesSum + state.deliveryPrice
}

export const {
  addProduct,
  removeProduct,
  setQuantity,
  setArticle,
  setProductData,
} = orderProductsSlice.actions

export default orderProductsSlice.reducer
