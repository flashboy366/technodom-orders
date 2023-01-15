import { Box, Button } from '@mui/material'
import { useAppDispatch } from '../../hooks/redux'
import { removeProduct } from '../../redux/reducers/orderProductsReducer'

interface ProductDeleteButtonProps {
  productID: number
}

const ProductDeleteButton = ({ productID }: ProductDeleteButtonProps) => {
  const dispatch = useAppDispatch()

  return (
    <Box flex={1} textAlign="center">
      <Button
        size="small"
        sx={{ height: 56 }}
        onClick={() => dispatch(removeProduct({ productID: productID }))}
      >
        ╳
      </Button>
    </Box>
  )
}

export default ProductDeleteButton
