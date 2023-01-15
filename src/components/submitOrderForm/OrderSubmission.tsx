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

interface OrderSubmissionProps {
  showResultSnack: (snackMessage: string) => void
  showResultModal: (resultModalMsg: string) => void
  deliveryAddressRequired: boolean
}

const OrderSubmission = ({
  showResultModal,
  deliveryAddressRequired,
}: OrderSubmissionProps) => {
  const appState = useAppSelector(state => state)
  const [agreementAccepted, setAgreementAccepted] = useState(false)

  const handleSubmitClick = async () => {
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
    </Stack>
  )
}

export default OrderSubmission
