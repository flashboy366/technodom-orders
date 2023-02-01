import { Stack } from '@mui/material'
import FormWrapper from './FormWrapper'
import OrderSummary from './submitOrderForm/OrderSummary'
import OrderSubmission from './submitOrderForm/OrderSubmission'
import { COLORS } from '../constants/materialui'

const SubmitOrderForm = () => {
  return (
    <FormWrapper
      title="Оформление заказа"
      sx={{ bgcolor: COLORS.SECONDARY_GRAY }}
    >
      <Stack spacing={7}>
        <OrderSummary />
        <OrderSubmission />
      </Stack>
    </FormWrapper>
  )
}

export default SubmitOrderForm
