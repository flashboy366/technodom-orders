import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Stack,
  Typography,
} from '@mui/material'
import { useFormContext } from 'react-hook-form'

const OrderSubmission = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const agreementErrors = (
    errors['agreement'] ? errors['agreement'].message : ''
  ).toString()

  return (
    <Stack spacing={1}>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        После оформления заказа с вами свяжется наш менеджер
      </Typography>
      <Button type="submit">Оформить заказ</Button>
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
          {agreementErrors}
        </FormHelperText>
      </FormGroup>
    </Stack>
  )
}

export default OrderSubmission
