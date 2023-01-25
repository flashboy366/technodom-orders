import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import {
  Backdrop,
  CircularProgress,
  Container,
  Paper,
  Stack,
  ThemeProvider,
} from '@mui/material'
import UserForm from './components/UserForm'
import ProductsForm from './components/ProductsForm'
import SubmitOrderForm from './components/SubmitOrderForm'
import { theme } from './util/materialui'
import { FormProvider } from 'react-hook-form'
import ResultModal from './components/ResultModal'
import { COLORS } from './constants/materialui'
import TitleHeader from './components/title/TitleHeader'
import TitleDescription from './components/title/TitleDescription'
import TitleAdvantages from './components/title/TitleAdvantages'
import FooterContacts from './components/footer/FooterContacts'
import FooterTip from './components/footer/FooterTip'
import FooterPartners from './components/footer/FooterPartners'
import ShopsForm from './components/ShopsForm'
import TitlePaymentOptions from './components/title/TitlePaymentOptions'
import useAppForm from './hooks/useAppForm'

const App = () => {
  const {
    onSubmit,
    reactHookFormMethods,
    setDeliveryAddressRequired,
    subscribeShowResultModal,
    loadingBackdropShown,
  } = useAppForm()

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          paddingBottom: 3,
          overflowX: 'hidden',
        }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          marginTop={1}
          marginBottom={2}
          spacing={2}
        >
          <Paper sx={{ paddingY: 1, paddingX: 3 }}>
            <Stack justifyItems="space-between" alignItems="center">
              <TitleHeader />
              <TitleDescription />
            </Stack>
          </Paper>
          <Stack direction="row">
            <TitlePaymentOptions flex={1} />
            <TitleAdvantages flex={1} />
          </Stack>
        </Stack>
        <FormProvider {...reactHookFormMethods}>
          <Stack flex={2} spacing={1}>
            <ShopsForm />
            <ProductsForm />
            <UserForm setDeliveryAddressRequired={setDeliveryAddressRequired} />
            <SubmitOrderForm />
          </Stack>
        </FormProvider>
        <Stack spacing={2} alignItems="center" marginTop={15}>
          <FooterPartners />
          <FooterContacts />
          <FooterTip />
        </Stack>
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
