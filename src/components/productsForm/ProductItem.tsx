import { CircularProgress, Divider, Stack } from '@mui/material'
import ProductDeleteButton from './ProductDeleteButton'
import Product from '../../types/Product'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'
import useProductItem from '../../hooks/useProductItem'
import ProductURL from './ProductURL'
import ProductQuantity from './ProductQuantity'
import ProductNameAndPrice from './ProductNameAndPrice'
import ProductImage from './ProductImage'

interface ProductItemProps {
  product: Product
  index: number
}

const ProductItem = ({ index, product }: ProductItemProps) => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())
  const {
    productState,
    updateProductURL,
    decrementQuantity,
    updateQuantity,
    incrementQuantity,
    productDataLoading,
  } = useProductItem({ product })

  return (
    <Stack>
      <Stack
        direction={isDesktopMedia ? 'column' : 'column-reverse'}
        justifyContent="space-between"
        spacing={isDesktopMedia ? 0 : 2}
        padding={2}
        paddingY={4}
      >
        <Stack
          direction={isDesktopMedia ? 'row' : 'row'}
          spacing={isDesktopMedia ? 2 : 1}
          justifyContent="space-between"
          alignItems={isDesktopMedia ? 'initial' : 'center'}
          width="100%"
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
          <ProductDeleteButton
            textAlign="right"
            index={index}
            productID={product.id}
          />
        </Stack>
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
          }}
          width="100%"
          spacing={4}
        >
          <ProductImage product={product} />
          {productDataLoading ? (
            <CircularProgress />
          ) : (
            <ProductNameAndPrice product={product} />
          )}
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  )
}

export default ProductItem
