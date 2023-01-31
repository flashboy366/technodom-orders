import { Stack, Typography } from '@mui/material'
import ProductQuantityButton from './ProductQuantityButtonProps'
import FormProductInput from '../react-hook-form/FormProductInput'
import Product from '../../types/Product'
import { ChangeEvent } from 'react'

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
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value.replace(/\D+/, '')
    updateQuantity(parseInt(value))
  }

  return (
    <Stack spacing={2} width={125} alignItems="center">
      <Typography>Количество</Typography>
      <Stack direction="row" spacing={1}>
        <ProductQuantityButton onClick={decrementQuantity}>
          -
        </ProductQuantityButton>
        <FormProductInput
          inputProps={{ readOnly: true }}
          index={index}
          name={`quantity`}
          value={productState.quantity}
          registerOnBlur={handleInputChange}
          registerOnChange={handleInputChange}
        />
        <ProductQuantityButton onClick={incrementQuantity}>
          +
        </ProductQuantityButton>
      </Stack>
    </Stack>
  )
}

export default ProductQuantity
