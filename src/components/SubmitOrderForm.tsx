import { Stack } from '@mui/material'
import FormWrapper from './FormWrapper'
import ResultSnack from './submitOrderForm/ResultSnack'
import ResultModal from './submitOrderForm/ResultModal'
import OrderSummary from './submitOrderForm/OrderSummary'
import OrderSubmission from './submitOrderForm/OrderSubmission'

interface SubmitOrderFormProps {
  deliveryAddressRequired: boolean
}

const SubmitOrderForm = ({ deliveryAddressRequired }: SubmitOrderFormProps) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  let showResultSnack = (snackMessage: string): void => {}
  const subscribeShowResultSnack = (
    showResultSnackCallback: (snackMessage: string) => void
  ) => {
    showResultSnack = showResultSnackCallback
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  let showResultModal = (resultModalMsg: string): void => {}
  const subscribeShowResultModal = (
    showResultModalCallback: (resultModalMsg: string) => void
  ) => {
    showResultModal = showResultModalCallback
  }

  return (
    <FormWrapper title="Оформление заказа">
      <Stack spacing={2}>
        <OrderSummary />
        <OrderSubmission
          showResultSnack={showResultSnack}
          showResultModal={showResultModal}
          deliveryAddressRequired={deliveryAddressRequired}
        />
      </Stack>
      <ResultSnack subscribeShowResultSnack={subscribeShowResultSnack} />
      <ResultModal subscribeShowResultModal={subscribeShowResultModal} />
    </FormWrapper>
  )
}

export default SubmitOrderForm
