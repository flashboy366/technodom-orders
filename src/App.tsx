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
import { theme } from './util/materialui'
import { FormProvider } from 'react-hook-form'
import ResultModal from './components/ResultModal'
import { COLORS } from './constants/materialui'
import FooterContacts from './components/footer/FooterContacts'
import FooterTip from './components/footer/FooterTip'
import FooterPartners from './components/footer/FooterPartners'
import ShopsForm from './components/ShopsForm'
import useAppForm from './hooks/useAppForm'
import Title from './components/Title'

const App = () => {
  const {
    onSubmit,
    reactHookFormMethods,
    setDeliveryAddressRequired,
    subscribeShowResultModal,
    loadingBackdropShown,
    shopIsChosen,
    setShopIsChosen,
    chosenShop,
    setChosenShop,
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
        <Title />
        <FormProvider {...reactHookFormMethods}>
          <Stack flex={2} spacing={2}>
            <ShopsForm
              shopIsChosen={shopIsChosen}
              setShopIsChosen={setShopIsChosen}
              chosenShop={chosenShop}
              setChosenShop={setChosenShop}
            />
            {shopIsChosen ? (
              <>
                <ProductsForm chosenShop={chosenShop} />
                <UserForm
                  setDeliveryAddressRequired={setDeliveryAddressRequired}
                />
                <SubmitOrderForm />
              </>
            ) : (
              <></>
            )}
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
