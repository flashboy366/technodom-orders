import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Container, Stack, ThemeProvider } from '@mui/material'
import UserForm from './components/UserForm'
import ProductsForm from './components/ProductsForm'
import SubmitOrderForm from './components/SubmitOrderForm'
import { desktopWidthSelector, theme } from './util/materialui'
import { useAppSelector } from './hooks/redux'

const App = () => {
  console.log(useAppSelector(state => state))

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          marginY: 2,
          [desktopWidthSelector()]: {
            minWidth: '500px',
            width: '40%',
          },
        }}
      >
        <Stack spacing={2}>
          <UserForm />
          <ProductsForm />
          <SubmitOrderForm />
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default App
