import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Container, Stack, ThemeProvider } from '@mui/material'
import UserForm from './components/UserForm'
import ProductsForm from './components/ProductsForm'
import SubmitOrderForm from './components/SubmitOrderForm'
import { theme } from './util/materialui'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import { useAppSelector } from './hooks/redux'
import { any, array, literal, object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { sendEmail } from './util/email'
import ResultModal from './components/submitOrderForm/ResultModal'

const productSchema = object({
  article: any().refine(val => val !== '', { message: 'Обязательное поле' }),
  quantity: any()
    .refine(val => val !== '', {
      message: 'Обязательное поле',
    })
    .refine(
      val => {
        const quantityRegExp = new RegExp(/^0+\d*/)
        return !quantityRegExp.test(val)
      },
      { message: 'Некорректное количество' }
    ),
})

const initialSubmitOrderSchema = object({
  name: string().nonempty('Обязательное поле'),
  email: string()
    .nonempty('Обязательноe поле')
    .email({ message: 'Некорректный адрес' }),
  phone: string()
    .nonempty('Обязательноe поле')
    .refine(
      val => {
        const phoneRegExp = new RegExp(/\+7\d{10}/)
        return phoneRegExp.test(val)
      },
      { message: 'Некорректный номер телефона' }
    ),
  location: string().nonempty('Обязательноe поле'),

  products: array(productSchema),

  agreement: literal(true, {
    errorMap: () => ({ message: 'Примите условия соглашения' }),
  }),
})

const App = () => {
  const [deliveryAddressRequired, setDeliveryAddressRequired] = useState(false)
  const [submitOrderSchema, setSubmitOrderSchema] = useState(
    initialSubmitOrderSchema
  )
  const appState = useAppSelector(state => state)

  useEffect(() => {
    if (deliveryAddressRequired) {
      setSubmitOrderSchema(
        submitOrderSchema.extend({
          addressStreet: string().nonempty('Обязательное поле'),
          addressContacts: string().nonempty('Обязательное поле'),
          addressHouse: string().nonempty('Обязательное поле'),
          addressPhone: string().nonempty('Обязательное поле'),
        })
      )
    } else setSubmitOrderSchema(initialSubmitOrderSchema)
  }, [deliveryAddressRequired])
  type SubmitOrderInput = TypeOf<typeof submitOrderSchema>
  const methods = useForm<SubmitOrderInput>({
    resolver: zodResolver(submitOrderSchema),
    defaultValues: {
      products: appState.orderProducts.products,
    },
  })
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])
  const onSubmitHandler: SubmitHandler<SubmitOrderInput> = () =>
    sendRequestEmail()

  const sendRequestEmail = async () => {
    const resultModalMsg = await sendEmail({
      appState,
      deliveryAddressRequired,
    })
    console.log(appState, deliveryAddressRequired)
    showResultModal(resultModalMsg)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  let showResultModal: (resultModalMsg: string) => void
  const subscribeShowResultModal = (
    showResultModalCallback: (resultModalMsg: string) => void
  ) => {
    showResultModal = showResultModalCallback
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          paddingY: 3,
        }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <FormProvider {...methods}>
          <Stack direction="row" spacing={2} height="100%">
            <Stack flex={2} spacing={2}>
              <SearchBar />
              <ProductsForm />
            </Stack>
            <Stack
              spacing={2}
              flex={1}
              justifyContent="space-between"
              height="94vh"
            >
              <UserForm
                setDeliveryAddressRequired={setDeliveryAddressRequired}
                // userInfoValidation={userInfoValidation}
              />
              <SubmitOrderForm
                deliveryAddressRequired={deliveryAddressRequired}
              />
            </Stack>
          </Stack>
        </FormProvider>
        <ResultModal subscribeShowResultModal={subscribeShowResultModal} />
      </Container>
    </ThemeProvider>
  )
}

export default App
