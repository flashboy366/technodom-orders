import { Stack } from '@mui/material'
import FormWrapper from './FormWrapper'
import OrderSummary from './submitOrderForm/OrderSummary'
import OrderSubmission from './submitOrderForm/OrderSubmission'

interface SubmitOrderFormProps {
  deliveryAddressRequired: boolean
}

const SubmitOrderForm = ({ deliveryAddressRequired }: SubmitOrderFormProps) => {
  return (
    <FormWrapper title="Оформление заказа">
      <Stack spacing={2}>
        <OrderSummary />
        <OrderSubmission deliveryAddressRequired={deliveryAddressRequired} />
      </Stack>
    </FormWrapper>
  )
}

export default SubmitOrderForm
