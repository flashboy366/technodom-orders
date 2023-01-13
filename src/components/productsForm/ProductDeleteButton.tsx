import { Button } from '@mui/material'
import { useAppDispatch } from '../../hooks/redux'
import { removeProduct } from '../../redux/reducers/orderProductsReducer'

interface ProductDeleteButtonProps {
  productID: number
}

const ProductDeleteButton = ({ productID }: ProductDeleteButtonProps) => {
  const dispatch = useAppDispatch()

  return (
    <Button
      size="small"
      sx={{ height: 56, alignSelf: 'flex-end' }}
      onClick={() => dispatch(removeProduct({ productID: productID }))}
    >
      ╳
    </Button>
  )
}

export default ProductDeleteButton
