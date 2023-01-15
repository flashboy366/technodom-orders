import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Container, Stack, ThemeProvider } from '@mui/material'
import UserForm from './components/UserForm'
import ProductsForm from './components/ProductsForm'
import SubmitOrderForm from './components/SubmitOrderForm'
import { theme } from './util/materialui'
import { useState } from 'react'
import SearchBar from './components/SearchBar'

const App = () => {
  const [deliveryAddressRequired, setDeliveryAddressRequired] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          paddingY: 3,
        }}
      >
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
            <UserForm setDeliveryAddressRequired={setDeliveryAddressRequired} />
            <SubmitOrderForm
              deliveryAddressRequired={deliveryAddressRequired}
            />
          </Stack>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default App
