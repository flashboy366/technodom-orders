import { Box, Button } from '@mui/material'
import { useAppDispatch } from '../../hooks/redux'
import { removeProduct } from '../../redux/reducers/orderProductsReducer'
import { useFieldArrayFormContext } from '../react-hook-form/FieldArrayFormProvider'

interface ProductDeleteButtonProps {
  index: number
  productID: number
}

const ProductDeleteButton = ({
  index,
  productID,
}: ProductDeleteButtonProps) => {
  const dispatch = useAppDispatch()

  const { remove } = useFieldArrayFormContext()

  const handleDeletePress = () => {
    dispatch(removeProduct({ productID: productID }))
    remove(index)
  }

  return (
    <Box flex={1} textAlign="right">
      <Button size="small" sx={{ height: 56 }} onClick={handleDeletePress}>
        ╳
      </Button>
    </Box>
  )
}

export default ProductDeleteButton
