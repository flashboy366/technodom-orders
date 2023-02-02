import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import {
  Backdrop,
  Box,
  CircularProgress,
  Collapse,
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
import FooterContacts from './components/footer/FooterContacts'
import FooterTip from './components/footer/FooterTip'
import FooterHighlights from './components/footer/FooterHighlights'
import ShopsForm from './components/ShopsForm'
import useAppForm from './hooks/useAppForm'
import Title from './components/Title'
import useIsMediaWidth from './hooks/useIsMediaWidth'
import FooterLuch from './components/footer/FooterLuch'

const App = () => {
  const {
    onSubmit,
    reactHookFormMethods,
    deliveryAddressRequired,
    setDeliveryAddressRequired,
    subscribeShowResultModal,
    loadingBackdropShown,
    shopIsChosen,
    setShopIsChosen,
    chosenShop,
    setChosenShop,
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
              <ShopsForm
                shopIsChosen={shopIsChosen}
                setShopIsChosen={setShopIsChosen}
                chosenShop={chosenShop}
                setChosenShop={setChosenShop}
              />
              <Collapse in={shopIsChosen}>
                <>
                  <ProductsForm chosenShop={chosenShop} />
                </>
              </Collapse>
              <UserForm
                deliveryAddressRequired={deliveryAddressRequired}
                setDeliveryAddressRequired={setDeliveryAddressRequired}
              />
            </Stack>
            {!isDesktopMedia && !shopIsChosen ? null : (
              <Box flex={1}>
                <SubmitOrderForm />
              </Box>
            )}
          </Stack>
        </FormProvider>
        <Stack spacing={4} alignItems="center" marginTop={30}>
          <Stack
            direction={isDesktopMedia ? 'row' : 'column'}
            width="100%"
            justifyContent="space-between"
            alignItems={isDesktopMedia ? 'flex-end' : 'center'}
            spacing={isDesktopMedia ? 0 : 2}
          >
            <FooterLuch />
            <FooterContacts />
          </Stack>
          <FooterHighlights />
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
