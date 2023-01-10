import { Button, Stack } from '@mui/material'
import FormWrapper from './FormWrapper'
import ProductItem from './productsForm/ProductItem'

const ProductsForm = () => {
  return (
    <FormWrapper title="Товары">
      <Stack spacing={1}>
        <ProductItem />
        <ProductItem />
        <Button>Добавить ещё один товар</Button>
      </Stack>
    </FormWrapper>
  )
}

export default ProductsForm
