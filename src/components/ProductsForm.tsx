import { Button, Stack } from '@mui/material'
import FormWrapper from './FormWrapper'
import ProductItem from './productsForm/ProductItem'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { addProduct } from '../redux/reducers/orderProductsReducer'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { emptyProduct } from '../interfaces/Product'
import { FieldArrayFormProvider } from './react-hook-form/FieldArrayFormProvider'

const ProductsForm = () => {
  const orderProductsState = useAppSelector(state => state.orderProducts)
  const dispatch = useAppDispatch()

  const formMethods = useFormContext()
  const fieldArrayMethods = useFieldArray({
    ...formMethods.control,
    name: 'products',
  })

  const handleAddProduct = () => {
    dispatch(addProduct())
    fieldArrayMethods.append(emptyProduct)
  }

  // const productsList = orderProductsState.products.map((product, index) => (
  //   <ProductItem key={index} index={index} product={product} />
  // ))

  const productsList = fieldArrayMethods.fields.map((value, index) => (
    <ProductItem
      key={index}
      index={index}
      product={orderProductsState.products[index]}
    />
  ))

  return (
    <FormWrapper title="Товары">
      <Stack spacing={2}>
        {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <FieldArrayFormProvider {...formMethods} {...fieldArrayMethods}>
          {productsList}
        </FieldArrayFormProvider>
        <Button
          onClick={handleAddProduct}
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
