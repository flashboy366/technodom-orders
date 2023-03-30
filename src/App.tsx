import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import {
  Backdrop,
  CircularProgress,
  Container,
  Stack,
  ThemeProvider,
} from '@mui/material'
import UserForm from './components/UserForm'
import ProductsForm from './components/ProductsForm'
import SubmitOrderForm from './components/SubmitOrderForm'
import { desktopWidthSelector, theme } from './util/materialui'
import { FormProvider } from 'react-hook-form'
import ResultModal from './components/ResultModal'
import { COLORS } from './constants/materialui'
import ShopsForm from './components/ShopsForm'
import useAppForm from './hooks/useAppForm'
import Title from './components/Title'
import useIsMediaWidth from './hooks/useIsMediaWidth'
import Footer from './components/Footer'

const App = () => {
  const {
    onSubmit,
    reactHookFormMethods,
    deliveryAddressRequired,
    setDeliveryAddressRequired,
    subscribeShowResultModal,
    loadingBackdropShown,
  } = useAppForm()

  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          paddingBottom: 3,
          bgcolor: COLORS.PRIMARY_WHITE,
          overflowX: isDesktopMedia ? 'initial' : 'hidden',
        }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <Title />
        <FormProvider {...reactHookFormMethods}>
          <Stack direction={isDesktopMedia ? 'row' : 'column'} spacing={4}>
            <Stack flex={2} spacing={8}>
              <Stack flex={3}>
                <ShopsForm />
                <ProductsForm />
                <UserForm
                  deliveryAddressRequired={deliveryAddressRequired}
                  setDeliveryAddressRequired={setDeliveryAddressRequired}
                />
              </Stack>
            </Stack>
            <Stack flex={1}>
              <SubmitOrderForm />
            </Stack>
          </Stack>
        </FormProvider>
        <Footer />

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
      </Container>
    </ThemeProvider>
  )
}

export default App
