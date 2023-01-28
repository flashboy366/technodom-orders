import { Button, Stack } from '@mui/material'
import FormWrapper from './FormWrapper'
import ProductItem from './productsForm/ProductItem'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { addProduct } from '../redux/reducers/orderProductsReducer'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { emptyProduct } from '../types/Product'
import { FieldArrayFormProvider } from './react-hook-form/FieldArrayFormProvider'
import { ChosenShop } from '../types/ChosenShop'

interface ProductsForm {
  chosenShop: ChosenShop
}

const ProductsForm = ({ chosenShop }: ProductsForm) => {
  const orderProductsState = useAppSelector(state => state.orderProducts)
  const dispatch = useAppDispatch()

  const formMethods = useFormContext()
  const fieldArrayMethods = useFieldArray({
    ...formMethods.control,
    name: 'products',
  })

  const addNewProductToValidationSchema = () => {
    const newProduct = { ...emptyProduct }
    const lastProductIndex = orderProductsState.products.length - 1
    const lastProduct = orderProductsState.products[lastProductIndex]
    newProduct.id = lastProduct ? lastProduct.id + 1 : 0
    fieldArrayMethods.append(newProduct)
  }

  const handleAddProduct = () => {
    addNewProductToValidationSchema()
    dispatch(addProduct())
  }

  const productsList = fieldArrayMethods.fields.map((value, index) => (
    <ProductItem
      key={index}
      index={index}
      product={orderProductsState.products[index]}
      chosenShop={chosenShop}
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
          }}
        >
          Добавить ещё один товар
        </Button>
      </Stack>
    </FormWrapper>
  )
}

export default ProductsForm
