import Product from '../../interfaces/Product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OrderProductsState {
  products: Product[]
}

const initialState: OrderProductsState = { products: [] }

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
        article: '',
        quantity: 0,
      }
      state.products.push(newProduct)
    },
    setArticle: (
      state,
      action: PayloadAction<{ productID: number; article: string }>
    ) => {
      const targetProductIndex = getProductIndexByID(
        state,
        action.payload.productID
      )
      state.products[targetProductIndex].article = action.payload.article
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
    },
    removeProduct: (state, action: PayloadAction<{ productID: number }>) => {
      const targetProductIndex = getProductIndexByID(
        state,
        action.payload.productID
      )
      state.products.splice(targetProductIndex, 1)
    },
  },
})

const getProductIndexByID = (state: OrderProductsState, productID: number) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const targetProduct = state.products.find(
    (product: Product) => product.id === productID
  )!
  return state.products.indexOf(targetProduct)
}

export const { addProduct, removeProduct, setQuantity, setArticle } =
  orderProductsSlice.actions

export default orderProductsSlice.reducer
