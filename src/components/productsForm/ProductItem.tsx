import { Paper, Stack } from '@mui/material'
import ProductProperty from './ProductProperty'
import ProductDeleteButton from './ProductDeleteButton'
import { desktopWidthSelector } from '../../util/materialui'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'

const ProductItem = () => {
  const [isDesktopWidth] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Paper variant="outlined">
      <Stack
        padding={2}
        spacing={2}
        justifyContent="space-between"
        direction={isDesktopWidth ? 'row' : 'column'}
      >
        <ProductProperty title="Артикул" />
        <ProductProperty title="Количество" />
        <ProductDeleteButton />
      </Stack>
    </Paper>
  )
}

export default ProductItem
