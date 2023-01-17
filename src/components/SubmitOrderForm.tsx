import { Stack } from '@mui/material'
import FormWrapper from './FormWrapper'
import OrderSummary from './submitOrderForm/OrderSummary'
import OrderSubmission from './submitOrderForm/OrderSubmission'

const SubmitOrderForm = () => {
  return (
    <FormWrapper title="Оформление заказа">
      <Stack spacing={2}>
        <OrderSummary />
        <OrderSubmission />
      </Stack>
    </FormWrapper>
  )
}

export default SubmitOrderForm
