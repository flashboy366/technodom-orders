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
import { COLORS } from '../../constants/materialui'

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
    <Stack spacing={1} alignItems="center">
      <FormGroup sx={{ gap: 0 }}>
        <FormControlLabel
          control={<Checkbox required />}
          {...control.register('agreement')}
          label={
            <Typography
              color={errors['agreement'] ? 'error' : 'inherit'}
              variant="body2"
            >
              Я ознакомился и принимаю условия договора оферты и соглашение на
              обработку персональных данных
            </Typography>
          }
        />
        <FormHelperText error={!!errors['agreement']}>
          {agreementErrors}
        </FormHelperText>
      </FormGroup>
      <Stack spacing={3} alignItems="center">
        <Button
          size="large"
          type="submit"
          variant="contained"
          sx={{ width: 'fit-content', color: COLORS.PRIMARY_WHITE }}
        >
          <Typography variant="body1" fontWeight={600}>
            Оформить заказ
          </Typography>
        </Button>
        <Typography variant="caption">
          После оформления заказа с вами свяжется наш менеджер
        </Typography>
      </Stack>
    </Stack>
  )
}

export default OrderSubmission
