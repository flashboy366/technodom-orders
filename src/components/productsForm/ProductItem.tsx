import { Box, Paper, Stack, Tooltip, Typography } from '@mui/material'
import ProductDeleteButton from './ProductDeleteButton'
import Product from '../../interfaces/Product'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  getProductIndexByID,
  setArticle,
  setProductData,
  setQuantity,
} from '../../redux/reducers/orderProductsReducer'
import { fetchProductData } from '../../api/fetchProductData'
import ProductPropertyTitle from './ProductPropertyTitle'
import { emptyProductData } from '../../interfaces/ProductData'
import { useEffect } from 'react'
import FormProductInput from '../react-hook-form/FormProductInput'

interface ProductItemProps {
  product: Product
  index: number
}

const ProductItem = ({ index, product }: ProductItemProps) => {
  const productState = useAppSelector(
    state =>
      state.orderProducts.products[
        getProductIndexByID(state.orderProducts, product.id)
      ]
  )
  const dispatch = useAppDispatch()

  const updateProductData = async () => {
    let newProductData
    if (product.article) {
      newProductData = await fetchProductData(product.article)
    } else newProductData = emptyProductData
    dispatch(
      setProductData({ productID: product.id, productData: newProductData })
    )
  }

  useEffect(() => {
    updateProductData()
  }, [product.article])

  const updateProductState = ({
    newArticle,
    newQuantity,
  }: {
    newArticle?: number
    newQuantity?: number
  }) => {
    if (newQuantity !== undefined)
      dispatch(setQuantity({ productID: product.id, quantity: newQuantity }))
    if (newArticle !== undefined)
      dispatch(setArticle({ productID: product.id, article: newArticle }))
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        padding: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Stack width="60%">
          <Stack direction="row" spacing={2} marginBottom={1}>
            <ProductPropertyTitle title="Артикул" />
            <ProductPropertyTitle title="Количество" />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Box flex={2}>
              <Tooltip
                title={
                  'Артикул находится на странице товара, сразу под названием'
                }
                arrow
                disableTouchListener
              >
                <FormProductInput
                  index={index}
                  name={`article`}
                  placeholder="Скопируйте артикул"
                  value={productState.article}
                  updateState={value =>
                    updateProductState({ newArticle: value })
                  }
                />
              </Tooltip>
            </Box>
            <Box flex={2}>
              <FormProductInput
                index={index}
                name={`quantity`}
                value={productState.quantity}
                updateState={value =>
                  updateProductState({ newQuantity: value })
                }
              />
            </Box>
          </Stack>
          <Typography>{product.productData.productTitle}</Typography>
          {product.productData.productTitle !== '' ? (
            <Typography color="blue" marginBottom={1}>
              {product.productData.productPriceLabel}
            </Typography>
          ) : null}
        </Stack>

        <ProductDeleteButton index={index} productID={product.id} />
      </Stack>
    </Paper>
  )
}

export default ProductItem
