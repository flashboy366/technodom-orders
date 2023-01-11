import { Button } from '@mui/material'
import { useAppDispatch } from '../../hooks/redux'
import { removeProduct } from '../../redux/reducers/orderProductsReducer'

interface ProductDeleteButtonProps {
  productID: number
}

const ProductDeleteButton = ({ productID }: ProductDeleteButtonProps) => {
  const dispatch = useAppDispatch()

  return (
    <Button onClick={() => dispatch(removeProduct({ productID: productID }))}>
      ╳
    </Button>
  )
}

export default ProductDeleteButton
