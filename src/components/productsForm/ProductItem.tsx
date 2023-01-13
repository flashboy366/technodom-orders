import { Paper, Stack, Typography } from '@mui/material'
import ProductProperty from './ProductProperty'
import ProductDeleteButton from './ProductDeleteButton'
import { desktopWidthSelector } from '../../util/materialui'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import Product from '../../interfaces/Product'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  getProductIndexByID,
  setArticle,
  setProductData,
  setQuantity,
} from '../../redux/reducers/orderProductsReducer'
import { useEffect } from 'react'
import { fetchProductData } from '../../api/fetchProductData'

interface ProductItemProps {
  product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
  const productState = useAppSelector(
    state =>
      state.orderProducts.products[
        getProductIndexByID(state.orderProducts, product.id)
      ]
  )
  const [isDesktopWidth] = useIsMediaWidth(desktopWidthSelector())
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchProductData(product.article).then(productData => {
      dispatch(
        setProductData({ productID: product.id, productData: productData })
      )
    })
  }, [productState.article, productState.quantity])

  const validatePropertyChange = (
    value: number,
    dispatchCallback: () => void
  ) => {
    if (value >= 0) dispatchCallback()
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        padding: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack
          spacing={2}
          justifyContent="space-between"
          direction={isDesktopWidth ? 'row' : 'column'}
          marginBottom={2}
        >
          <ProductProperty
            title="Артикул"
            value={product.article}
            onChange={(value: number) =>
              validatePropertyChange(value, () =>
                dispatch(setArticle({ productID: product.id, article: value }))
              )
            }
          />
          <ProductProperty
            title="Количество"
            value={product.quantity}
            onChange={(value: number) =>
              validatePropertyChange(value, () =>
                dispatch(
                  setQuantity({ productID: product.id, quantity: value })
                )
              )
            }
          />
        </Stack>
        <ProductDeleteButton
          productID={product.id}
          sx={{ alignSelf: isDesktopWidth ? 'flex-end' : 'flex-start' }}
        />
      </Stack>
      <Typography>{product.productData.productTitle}</Typography>
      {product.productData.productTitle !== '' ? (
        <Typography color="blue">
          {product.productData.productPriceLabel}
        </Typography>
      ) : null}
    </Paper>
  )
}

export default ProductItem
