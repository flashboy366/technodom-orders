import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material'
import { sendEmail } from '../../util/email'
import { ChangeEvent, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import useFormValidation from '../../hooks/useFormValidation'
import ResultSnack from './ResultSnack'
import ResultModal from './ResultModal'

interface OrderSubmissionProps {
  deliveryAddressRequired: boolean
}

const OrderSubmission = ({ deliveryAddressRequired }: OrderSubmissionProps) => {
  const appState = useAppSelector(state => state)
  const [agreementAccepted, setAgreementAccepted] = useState(false)

  const {
    validateUserForm,
    validateAddressDeliveryForm,
    validateOrderProducts,
  } = useFormValidation()
  const formValid =
    validateUserForm() &&
    validateAddressDeliveryForm(deliveryAddressRequired) &&
    validateOrderProducts()

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  let showResultSnack: (snackMessage: string) => void
  const subscribeShowResultSnack = (
    showResultSnackCallback: (snackMessage: string) => void
  ) => {
    showResultSnack = showResultSnackCallback
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  let showResultModal: (resultModalMsg: string) => void
  const subscribeShowResultModal = (
    showResultModalCallback: (resultModalMsg: string) => void
  ) => {
    showResultModal = showResultModalCallback
  }

  const handleSubmitClick = async () => {
    if (!formValid) {
      showResultSnack('Заполните все поля')
      return
    }
    if (!agreementAccepted) {
      showResultSnack('Примите условия договора')
      return
    }
    const resultModalMsg = await sendEmail({
      appState,
      deliveryAddressRequired,
    })
    showResultModal(resultModalMsg)
  }

  const handleAgreementCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => setAgreementAccepted(event.target.checked)

  return (
    <Stack spacing={1}>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        После оформления заказа с вами свяжется наш менеджер
      </Typography>
      <Button onClick={handleSubmitClick}>Оформить заказ</Button>
      <FormControlLabel
        sx={{ alignSelf: 'center' }}
        control={<Checkbox onChange={handleAgreementCheckboxChange} />}
        label={
          <Typography variant="caption" fontWeight={300} textAlign="center">
            Я ознакомился и принимаю условия договора оферты и соглашение на
            обработку персональных данных
          </Typography>
        }
      />
      <ResultSnack subscribeShowResultSnack={subscribeShowResultSnack} />
      <ResultModal subscribeShowResultModal={subscribeShowResultModal} />
    </Stack>
  )
}

export default OrderSubmission
