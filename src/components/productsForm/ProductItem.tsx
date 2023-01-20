import { Box, Link, Paper, Stack, Typography } from '@mui/material'
import ProductDeleteButton from './ProductDeleteButton'
import Product from '../../interfaces/Product'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  decrementQuantity,
  getProductIndexByID,
  incrementQuantity,
  setArticle,
  setProductData,
  setQuantity,
} from '../../redux/reducers/orderProductsReducer'
import { fetchProductData } from '../../api/fetchProductData'
import ProductPropertyTitle from './ProductPropertyTitle'
import { emptyProductData } from '../../interfaces/ProductData'
import { useEffect } from 'react'
import FormProductInput from '../react-hook-form/FormProductInput'
import { COLORS } from '../../constants/materialui'
import ProductQuantityButton from './ProductQuantityButtonProps'
import Image from 'mui-image'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

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
    if (product) {
      if (product.article) {
        newProductData = await fetchProductData(product.article)
      } else newProductData = emptyProductData
      dispatch(
        setProductData({ productID: product.id, productData: newProductData })
      )
    }
  }

  useEffect(() => {
    updateProductData()
  }, [product.article])

  const updateArticle = (newArticle: number | undefined) => {
    dispatch(setArticle({ productID: product.id, article: newArticle }))
  }

  const updateQuantity = (newQuantity: number) => {
    dispatch(setQuantity({ productID: product.id, quantity: newQuantity }))
  }

  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Paper
      variant="outlined"
      sx={{
        padding: 2,
      }}
    >
      <Stack
        direction={isDesktopMedia ? 'row' : 'column'}
        justifyContent="space-between"
        spacing={isDesktopMedia ? 0 : 2}
      >
        {/*Leftside basic product input and info*/}
        <Stack>
          {/*Inputs*/}
          <Stack
            direction={isDesktopMedia ? 'row' : 'column'}
            spacing={isDesktopMedia ? 2 : 0}
            justifyContent="flex-start"
          >
            {/*Article*/}
            <Stack spacing={2} width={200}>
              <ProductPropertyTitle title="Артикул" />
              {/*Article input*/}
              <Box>
                <FormProductInput
                  fullWidth
                  index={index}
                  name={`article`}
                  placeholder="Скопируйте артикул"
                  value={productState.article}
                  updateState={value => updateArticle(value)}
                />
              </Box>
            </Stack>
            {/*Quantity*/}
            <Stack spacing={2} width={210}>
              {/*Quantity input*/}
              <ProductPropertyTitle title="Количество" />
              <Stack direction="row" spacing={1}>
                <ProductQuantityButton
                  onClick={() =>
                    dispatch(decrementQuantity({ productID: product.id }))
                  }
                >
                  -
                </ProductQuantityButton>
                <FormProductInput
                  index={index}
                  name={`quantity`}
                  value={productState.quantity}
                  updateState={value => updateQuantity(value!)}
                />
                <ProductQuantityButton
                  onClick={() =>
                    dispatch(incrementQuantity({ productID: product.id }))
                  }
                >
                  +
                </ProductQuantityButton>
              </Stack>
            </Stack>
          </Stack>
          {/*Product name and price*/}
          <Stack width={isDesktopMedia ? 450 : '100%'}>
            <Link href={product.productData.productUrl} variant="body1">
              {product.productData.productTitle}
            </Link>
            {product.productData.productTitle !== '' ? (
              <Typography
                color={
                  product.productData.productPriceInTengeLabel
                    ? COLORS.ACCENT_BLUE
                    : COLORS.ERROR_RED
                }
                marginBottom={1}
              >
                {product.productData.productPriceInTengeLabel
                  ? `${product.productData.productPriceInRubles} р.`
                  : 'Нет в наличии'}
              </Typography>
            ) : null}
          </Stack>
        </Stack>
        {/*Product image*/}
        <Box
          height={isDesktopMedia ? 180 : 180}
          alignSelf={'center'}
          width={'fit-content'}
        >
          <Image
            width={isDesktopMedia ? 180 : 180}
            src={
              product.productData.productImgUrl
                ? product.productData.productImgUrl
                : 'empty_product.jpg'
            }
          />
        </Box>
        <ProductDeleteButton
          textAlign="right"
          index={index}
          productID={product.id}
        />
      </Stack>
    </Paper>
  )
}

export default ProductItem
