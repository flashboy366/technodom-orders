import ProductPropertyTitle from './ProductPropertyTitle'
import { Stack } from '@mui/material'
import ProductQuantityButton from './ProductQuantityButtonProps'
import FormProductInput from '../react-hook-form/FormProductInput'
import Product from '../../types/Product'

interface ProductQuantityProps {
  index: number
  decrementQuantity: () => void | null
  productState: Product
  updateQuantity: (newQuantity: number) => void
  incrementQuantity: () => void | null
}

const ProductQuantity = ({
  index,
  decrementQuantity,
  productState,
  updateQuantity,
  incrementQuantity,
}: ProductQuantityProps) => {
  return (
    <Stack spacing={2} width={210}>
      {/*Quantity input*/}
      <ProductPropertyTitle title="Количество" />
      <Stack direction="row" spacing={1}>
        <ProductQuantityButton onClick={decrementQuantity}>
          -
        </ProductQuantityButton>
        <FormProductInput
          index={index}
          name={`quantity`}
          value={productState.quantity}
          updateState={value => updateQuantity(value!)}
        />
        <ProductQuantityButton onClick={incrementQuantity}>
          +
        </ProductQuantityButton>
      </Stack>
    </Stack>
  )
}

export default ProductQuantity
