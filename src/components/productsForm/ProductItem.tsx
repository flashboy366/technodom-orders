import { Paper, Stack } from '@mui/material'
import ProductProperty from './ProductProperty'
import ProductDeleteButton from './ProductDeleteButton'
import { desktopWidthSelector } from '../../util/materialui'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import Product from '../../interfaces/Product'
import { useAppDispatch } from '../../hooks/redux'
import {
  setArticle,
  setQuantity,
} from '../../redux/reducers/orderProductsReducer'

interface ProductItemProps {
  product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
  const [isDesktopWidth] = useIsMediaWidth(desktopWidthSelector())
  const dispatch = useAppDispatch()

  return (
    <Paper variant="outlined">
      <Stack
        padding={2}
        spacing={2}
        justifyContent="space-between"
        direction={isDesktopWidth ? 'row' : 'column'}
      >
        <ProductProperty
          title="Артикул"
          value={product.article}
          onChange={(value: string) =>
            dispatch(setArticle({ productID: product.id, article: value }))
          }
        />
        <ProductProperty
          title="Количество"
          value={product.quantity}
          onChange={(value: number) =>
            dispatch(setQuantity({ productID: product.id, quantity: value }))
          }
        />
        <ProductDeleteButton productID={product.id} />
      </Stack>
    </Paper>
  )
}

export default ProductItem
