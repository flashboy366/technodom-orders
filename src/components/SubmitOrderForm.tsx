import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material'
import FormWrapper from './FormWrapper'
import useFormValidation from '../hooks/useFormValidation'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useAppSelector } from '../hooks/redux'
import sendRequestEmail from '../api/sendRequestEmail'
import { UserInfoState } from '../redux/reducers/userInfoReducer'
import { OrderProductsState } from '../redux/reducers/orderProductsReducer'
import { AddressDeliveryState } from '../redux/reducers/addressDeliveryReducer'

interface SubmitOrderForm {
  deliveryAddressRequired: boolean
}

const SubmitOrderForm = ({ deliveryAddressRequired }: SubmitOrderForm) => {
  const {
    validateUserForm,
    validateAddressDeliveryForm,
    validateOrderProducts,
  } = useFormValidation()
  const [agreementAccepted, setAgreementAccepted] = useState(false)
  const [snackOpen, setSnackOpen] = useState(false)
  const [snackMessage, setSnackMessage] = useState('')
  const appState = useAppSelector(state => state)
  const orderProductsState = appState.orderProducts
  const [requestResultModalOpen, setRequestResultModalOpen] = useState(false)
  const [requestResultModalMsg, setRequestResultModalMsg] = useState('')

  const formValid =
    validateUserForm() &&
    validateAddressDeliveryForm(deliveryAddressRequired) &&
    validateOrderProducts()

  const handleSubmitClick = async () => {
    if (!formValid) {
      setSnackMessage('Заполните все поля')
      setSnackOpen(true)
      return
    }
    if (!agreementAccepted) {
      setSnackMessage('Примите условия договора')
      setSnackOpen(true)
      return
    }
    const requestParams: (
      | UserInfoState
      | OrderProductsState
      | AddressDeliveryState
    )[] = [appState.userInfo, orderProductsState]

    if (deliveryAddressRequired) requestParams.push(appState.addressDelivery)
    // console.log(await sendRequestEmail(requestParams))
    setRequestResultModalMsg(await sendRequestEmail(requestParams))
    setRequestResultModalOpen(true)
  }

  const handleAgreementCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => setAgreementAccepted(event.target.checked)

  const handleSnackClose = (
    event?: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackOpen(false)
  }

  const handleRequestResultModalClose = () => setRequestResultModalOpen(false)

  return (
    <FormWrapper title="Оформление заказа">
      <Stack spacing={2}>
        <Stack>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            У вас {orderProductsState.products.length} товара на сумму{' '}
            {orderProductsState.productsPricesSum} р.
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Стоимость доставки: {orderProductsState.deliveryPrice} р.
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', fontWeight: '500' }}
          >
            Итого: {orderProductsState.totalPrice} р.
          </Typography>
          <Typography variant="caption" sx={{ textAlign: 'center', margin: 1 }}>
            Стоимость товара указана с учетом доставки и выдачи товара на складе
            в г. Челябинск, Свердловский тракт 5. Стоимость доставки до адреса и
            в другие города необходимо согласовать с оператором по тел:
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <FormControlLabel
            sx={{ alignSelf: 'center', width: '70%' }}
            control={<Checkbox onChange={handleAgreementCheckboxChange} />}
            label={
              <Typography variant="caption" fontWeight={300} textAlign="center">
                Я ознакомился и принимаю условия договора оферты и соглашение на
                обработку персональных данных
              </Typography>
            }
          />
          <Button onClick={handleSubmitClick}>Оформить заказ</Button>
          <Typography variant="caption" sx={{ textAlign: 'center' }}>
            После оформления заказа с вами свяжется наш менеджер
          </Typography>
        </Stack>
      </Stack>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity="error"
          sx={{ width: '100%' }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
      <Modal
        open={requestResultModalOpen}
        onClose={handleRequestResultModalClose}
        sx={{ height: 500, alignContent: 'center' }}
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 5,
          }}
        >
          <Typography>{requestResultModalMsg}</Typography>
        </Paper>
      </Modal>
    </FormWrapper>
  )
}

export default SubmitOrderForm
