import { Button, ButtonBaseProps } from '@mui/material'
import { useAppDispatch } from '../../hooks/redux'
import { removeProduct } from '../../redux/reducers/orderProductsReducer'

interface ProductDeleteButtonProps extends ButtonBaseProps {
  productID: number
}

const ProductDeleteButton = ({ productID, sx }: ProductDeleteButtonProps) => {
  const dispatch = useAppDispatch()

  return (
    <Button
      size="small"
      sx={{ ...sx, height: 56 }}
      onClick={() => dispatch(removeProduct({ productID: productID }))}
    >
      ╳
    </Button>
  )
}

export default ProductDeleteButton
