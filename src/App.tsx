import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import {
  Backdrop,
  CircularProgress,
  Container,
  CssBaseline,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material'
import UserForm from './components/UserForm'
import ProductsForm from './components/ProductsForm'
import SubmitOrderForm from './components/SubmitOrderForm'
import { desktopMediaSelector, theme } from './util/materialui'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { any, array, literal, number, object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { sendEmails } from './util/email'
import ResultModal from './components/submitOrderForm/ResultModal'
import MobileAppTip from './components/MobileAppTip'
import useIsMedia from './hooks/useIsMedia'
import { resetProductsState } from './redux/reducers/orderProductsReducer'
import { COLORS } from './constants/materialui'
import TitleHeader from './components/title/TitleHeader'
import TitleDescription from './components/title/TitleDescription'
import TitleAdvantages from './components/title/TitleAdvantages'
import FooterContacts from './components/footer/FooterContacts'
import FooterTip from './components/footer/FooterTip'
import FooterPartners from './components/footer/FooterPartners'
import HeaderForm from './components/HeaderForm'
import TitlePaymentOptions from './components/title/TitlePaymentOptions'
import HowToSection from './components/HowToSection'

const productSchema = object({
  article: any().refine(val => val !== '', { message: 'Обязательное поле' }),
  quantity: any()
    .refine(val => val !== '', {
      message: 'Обязательное поле',
    })
    .refine(val => parseInt(val) > 0, { message: 'Некорректное количество' })
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
        const phoneRegExp1 = new RegExp(/\+7\d{10}/)
        const phoneRegExp2 = new RegExp(/8\d{10}/)
        return phoneRegExp1.test(val) || phoneRegExp2.test(val)
      },
      { message: 'Некорректный номер телефона' }
    ),
  location: any().refine(val => val !== undefined, {
    message: 'Обязательное поле',
  }),
  products: array(productSchema),
  agreement: literal(true, {
    errorMap: () => ({ message: 'Примите условия соглашения' }),
  }),
  orderPrice: number().refine(val => val > 5000),
})

const App = () => {
  const [deliveryAddressRequired, setDeliveryAddressRequired] = useState(false)
  const [submitOrderSchema, setSubmitOrderSchema] = useState(
    initialSubmitOrderSchema
  )
  const appState = useAppSelector(state => state)
  const [loadingBackdropShown, setLoadingBackdropShown] = useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (deliveryAddressRequired) {
      setSubmitOrderSchema(
        submitOrderSchema.extend({
          addressStreet: string().nonempty('Обязательное поле'),
          addressContacts: string().nonempty('Обязательное поле'),
          addressHouse: string().nonempty('Обязательное поле'),
          addressPhone: string()
            .nonempty('Обязательноe поле')
            .refine(
              val => {
                const phoneRegExp1 = new RegExp(/\+7\d{10}/)
                const phoneRegExp2 = new RegExp(/8\d{10}/)
                return phoneRegExp1.test(val) || phoneRegExp2.test(val)
              },
              { message: 'Некорректный номер телефона' }
            ),
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
  const onSubmitHandler: SubmitHandler<SubmitOrderInput> = () => {
    sendRequestEmail()
  }

  const sendRequestEmail = async () => {
    setLoadingBackdropShown(true)
    const responseCode = await sendEmails({
      appState,
      deliveryAddressRequired,
    })
    setLoadingBackdropShown(false)
    if (responseCode < 400) {
      showResultModal('Заявка отправлена!')
      dispatch(resetProductsState())
    } else showResultModal(`Ошибка ${responseCode}`)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  let showResultModal: (resultModalMsg: string) => void
  const subscribeShowResultModal = (
    showResultModalCallback: (resultModalMsg: string) => void
  ) => {
    showResultModal = showResultModalCallback
  }

  const [isDesktopMedia] = useIsMedia(desktopMediaSelector())

  useEffect(() => {
    methods.register('orderPrice')
  }, [])
  useEffect(() => {
    methods.setValue('orderPrice', appState.orderProducts.totalPriceInRubles)
  }, [appState.orderProducts.totalPriceInRubles])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          paddingTop: isDesktopMedia ? 3 : 0,
          overflowX: isDesktopMedia ? 'initial' : 'hidden',
          paddingBottom: 3,
        }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <Stack spacing={isDesktopMedia ? 3 : 5} boxSizing="content-box">
          <Stack
            direction={isDesktopMedia ? 'row' : 'column'}
            justifyContent="space-between"
            alignItems="center"
            spacing={isDesktopMedia ? 7 : 3}
            width="90vw"
            alignSelf="center"
            bgcolor={COLORS.PRIMARY_WHITE}
            padding={3}
            borderRadius={5}
          >
            <Paper elevation={0}>
              <Stack
                flex={1}
                justifyItems="space-between"
                height="100%"
                spacing={1}
                paddingY={isDesktopMedia ? 0 : 3}
              >
                <TitleHeader />
                <TitleDescription />
              </Stack>
            </Paper>
            <TitleAdvantages />
            <TitlePaymentOptions />
          </Stack>
          <HowToSection />
          <FormProvider {...methods}>
            <Paper elevation={0}>
              <Stack spacing={2}>
                <Typography
                  sx={{
                    alignItems: 'center',
                    width: 'fit-content',
                    alignSelf: 'center',
                    padding: 3,
                  }}
                >
                  <Typography
                    variant="h4"
                    textAlign={'center'}
                    width="fit-content"
                  >
                    Форма заказа
                  </Typography>
                </Typography>
                <HeaderForm />
                <ProductsForm />
                <UserForm
                  setDeliveryAddressRequired={setDeliveryAddressRequired}
                />
                <SubmitOrderForm />
              </Stack>
            </Paper>
          </FormProvider>
          <Stack spacing={2} alignItems="center" paddingTop={15}>
            <FooterPartners />
            <FooterContacts />
            <FooterTip />
          </Stack>
        </Stack>
      </Container>
      <ResultModal subscribeShowResultModal={subscribeShowResultModal} />
      <Backdrop
        sx={{
          color: COLORS.PRIMARY_WHITE,
          zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={loadingBackdropShown}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <MobileAppTip />
    </ThemeProvider>
  )
}

export default App
