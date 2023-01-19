import Product, { emptyProduct } from '../../interfaces/Product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ProductData, { emptyProductData } from '../../interfaces/ProductData'
import FINANCIAL from '../../constants/financial'

export interface OrderProductsState {
  products: Product[]
  productsPricesSumInRubles: number
  productsPricesSumInTenge: number
  totalPriceInTenge: number
  totalPriceInRubles: number
  serviceFeeInRubles: number
}

const initialState: OrderProductsState = {
  products: [emptyProduct],
  productsPricesSumInRubles: 0,
  productsPricesSumInTenge: 0,
  totalPriceInRubles: 0,
  totalPriceInTenge: 0,
  serviceFeeInRubles: 0,
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
      console.log(typeof action.payload.quantity)
      state.products[targetProductIndex].quantity = action.payload.quantity
      calculateProductsPricesSum(state)
    },

    incrementQuantity: (
      state,
      action: PayloadAction<{ productID: number }>
    ) => {
      state.products[action.payload.productID].quantity++
      calculateProductsPricesSum(state)
    },

    decrementQuantity: (
      state,
      action: PayloadAction<{ productID: number }>
    ) => {
      if (state.products[action.payload.productID].quantity > 1)
        state.products[action.payload.productID].quantity--
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

    resetProductsState: () => initialState,
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
  let newProductsPricesSumInRubles = 0
  let newProductsPricesSumInTenge = 0
  state.products.map(product => {
    if (product.productData.productPriceInRubles && product.quantity) {
      newProductsPricesSumInRubles +=
        product.quantity * product.productData.productPriceInRubles
      newProductsPricesSumInTenge +=
        product.quantity * product.productData.productPriceInTenge
    }
  })

  state.productsPricesSumInRubles = newProductsPricesSumInRubles
  state.totalPriceInRubles = Math.trunc(
    state.productsPricesSumInRubles * FINANCIAL.EXTRA_CHARGE_COEFFICIENT
  )
  state.serviceFeeInRubles =
    state.totalPriceInRubles - state.productsPricesSumInRubles

  state.productsPricesSumInTenge = newProductsPricesSumInTenge
  state.totalPriceInTenge = Math.trunc(
    state.productsPricesSumInTenge * FINANCIAL.EXTRA_CHARGE_COEFFICIENT
  )
}

export const {
  addProduct,
  removeProduct,
  setQuantity,
  setArticle,
  setProductData,
  incrementQuantity,
  decrementQuantity,
  resetProductsState,
} = orderProductsSlice.actions

export default orderProductsSlice.reducer
