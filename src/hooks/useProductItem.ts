import { fetchProductData } from '../api/fetchProductData'
import {
  getProductIndexByID,
  setProductData,
  setProductURL,
  setQuantity,
} from '../redux/reducers/orderProductsReducer'
import { useAppDispatch, useAppSelector } from './redux'
import { useEffect } from 'react'
import { emptyProductData } from '../types/ProductData'
import Product from '../types/Product'

interface UseProductItemProps {
  product: Product
}

const useProductItem = ({ product }: UseProductItemProps) => {
  const productState = useAppSelector(
    state =>
      state.orderProducts.products[
        getProductIndexByID(state.orderProducts, product.id)
      ]
  )
  const dispatch = useAppDispatch()

  const updateProductData = async () => {
    let newProductData
    if (product) {
      if (product.productURL) {
        newProductData = await fetchProductData(product.productURL)
      } else newProductData = emptyProductData
      dispatch(
        setProductData({ productID: product.id, productData: newProductData })
      )
    }
  }

  useEffect(() => {
    updateProductData()
  }, [product.productURL])

  const updateProductURL = (newProductURL: string) => {
    dispatch(
      setProductURL({ productID: product.id, productURL: newProductURL })
    )
  }
  const updateQuantity = (newQuantity: number) => {
    dispatch(setQuantity({ productID: product.id, quantity: newQuantity }))
  }
  const incrementQuantity = () => updateQuantity(productState.quantity + 1)
  const decrementQuantity = () =>
    productState.quantity > 1 ? updateQuantity(productState.quantity - 1) : null

  return {
    productState,
    updateProductURL,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
  }
}

export default useProductItem
