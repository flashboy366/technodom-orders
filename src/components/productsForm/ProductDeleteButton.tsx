import { Box, BoxProps, Button } from '@mui/material'
import { useAppDispatch } from '../../hooks/redux'
import { removeProduct } from '../../redux/reducers/orderProductsReducer'
import { useFieldArrayFormContext } from '../react-hook-form/FieldArrayFormProvider'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

interface ProductDeleteButtonProps extends BoxProps {
  index: number
  productID: number
}

const ProductDeleteButton = ({
  index,
  productID,
  ...otherProps
}: ProductDeleteButtonProps) => {
  const dispatch = useAppDispatch()

  const { remove } = useFieldArrayFormContext()

  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  const handleDeletePress = () => {
    dispatch(removeProduct({ productID: productID }))
    remove(index)
  }

  return (
    <Box {...otherProps}>
      <Button
        size="small"
        sx={{ minWidth: 40, top: isDesktopMedia ? 0 : 5 }}
        onClick={handleDeletePress}
      >
        ╳
      </Button>
    </Box>
  )
}

export default ProductDeleteButton
