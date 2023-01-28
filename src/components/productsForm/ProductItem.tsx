import { Paper, Stack } from '@mui/material'
import ProductDeleteButton from './ProductDeleteButton'
import Product from '../../types/Product'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'
import useProductItem from '../../hooks/useProductItem'
import ProductURL from './ProductURL'
import ProductQuantity from './ProductQuantity'
import ProductNameAndPrice from './ProductNameAndPrice'
import ProductImage from './ProductImage'
import { ChosenShop } from '../../types/ChosenShop'

interface ProductItemProps {
  product: Product
  index: number
  chosenShop: ChosenShop
}

const ProductItem = ({ index, product, chosenShop }: ProductItemProps) => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())
  const {
    productState,
    updateProductURL,
    decrementQuantity,
    updateQuantity,
    incrementQuantity,
  } = useProductItem({ chosenShop, product })

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
        <Stack>
          <Stack
            direction={isDesktopMedia ? 'row' : 'column'}
            spacing={isDesktopMedia ? 2 : 0}
            justifyContent="flex-start"
            alignItems={isDesktopMedia ? 'initial' : 'center'}
          >
            <ProductURL
              index={index}
              productState={productState}
              updateProductURL={updateProductURL}
            />
            <ProductQuantity
              productState={productState}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
              updateQuantity={updateQuantity}
              index={index}
            />
          </Stack>
          <ProductNameAndPrice product={product} />
        </Stack>
        <ProductImage product={product} />
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
