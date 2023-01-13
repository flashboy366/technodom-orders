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
      sx={{ ...sx, height: 56 }}
      size="small"
      onClick={() => dispatch(removeProduct({ productID: productID }))}
    >
      ╳
    </Button>
  )
}

export default ProductDeleteButton
