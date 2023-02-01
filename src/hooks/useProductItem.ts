import { fetchProductData } from '../api/fetchProductData'
import {
  getProductIndexByID,
  setProductData,
  setProductURL,
  setQuantity,
} from '../redux/reducers/orderProductsReducer'
import { useAppDispatch, useAppSelector } from './redux'
import { useEffect, useState } from 'react'
import { emptyProductData } from '../types/ProductData'
import Product from '../types/Product'
import { ChosenShop } from '../types/ChosenShop'

interface UseProductItemProps {
  product: Product
  chosenShop: ChosenShop
}

const useProductItem = ({ product, chosenShop }: UseProductItemProps) => {
  const [productDataLoading, setProductDataLoading] = useState(false)

  const productState = useAppSelector(
    state =>
      state.orderProducts.products[
        getProductIndexByID(state.orderProducts, product.id)
      ]
  )
  const dispatch = useAppDispatch()

  const updateProductData = async () => {
    let newProductData = emptyProductData
    if (!product) return
    if (product.productURL) {
      setProductDataLoading(true)
      try {
        newProductData = await fetchProductData({
          chosenShop: chosenShop,
          productURL: product.productURL,
        })
      } catch (e) {
        console.log(e)
      }
      setProductDataLoading(false)
    }
    dispatch(
      setProductData({ productID: product.id, productData: newProductData })
    )
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
    productDataLoading,
  }
}

export default useProductItem
