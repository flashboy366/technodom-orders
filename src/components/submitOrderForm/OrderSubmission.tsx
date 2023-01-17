import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Stack,
  Typography,
} from '@mui/material'
import { useAppSelector } from '../../hooks/redux'
import { useFormContext } from 'react-hook-form'

interface OrderSubmissionProps {
  deliveryAddressRequired: boolean
}

const OrderSubmission = () => {
  const appState = useAppSelector(state => state)

  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Stack spacing={1}>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        После оформления заказа с вами свяжется наш менеджер
      </Typography>
      <Button
        // onClick={handleSubmitClick}
        type="submit"
      >
        Оформить заказ
      </Button>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox required />}
          {...control.register('agreement')}
          label={
            <Typography color={errors['agreement'] ? 'error' : 'inherit'}>
              Я ознакомился и принимаю условия договора оферты и соглашение на
              обработку персональных данных
            </Typography>
          }
        />
        <FormHelperText error={!!errors['agreement']}>
          {errors['agreement'] ? errors['agreement'].message : ''}
        </FormHelperText>
      </FormGroup>
      {/*<ResultSnack subscribeShowResultSnack={subscribeShowResultSnack} />*/}
    </Stack>
  )
}

export default OrderSubmission
