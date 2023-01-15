import { Button, Stack } from '@mui/material'
import FormWrapper from './FormWrapper'
import ProductItem from './productsForm/ProductItem'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { addProduct } from '../redux/reducers/orderProductsReducer'

const ProductsForm = () => {
  const orderProductsState = useAppSelector(state => state.orderProducts)
  const dispatch = useAppDispatch()

  const productsList = orderProductsState.products.map((product, index) => (
    <ProductItem key={index} product={product} />
  ))

  return (
    <FormWrapper title="Товары">
      <Stack spacing={2}>
        {productsList}
        <Button
          onClick={() => dispatch(addProduct())}
          sx={{
            backgroundColor: 'white',
            width: 'fit-content',
            alignSelf: 'center',
          }}
        >
          Добавить ещё один товар
        </Button>
      </Stack>
    </FormWrapper>
  )
}

export default ProductsForm
