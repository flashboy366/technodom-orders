import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Link,
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
    <Stack spacing={2} alignItems="center">
      <FormGroup sx={{ gap: 0 }}>
        <FormControlLabel
          control={<Checkbox required />}
          {...control.register('agreement')}
          label={
            <Typography
              color={errors['agreement'] ? 'error' : 'inherit'}
              variant="body2"
              textAlign="center"
            >
              Я ознакомился и принимаю условия{' '}
              <Link href="Оферта ТОО ВМ Логистика.docx">договора оферты</Link> и
              соглашение на обработку персональных данных
            </Typography>
          }
        />
        <FormHelperText
          sx={{ textAlign: 'center' }}
          error={!!errors['agreement']}
        >
          {agreementErrors}
        </FormHelperText>
      </FormGroup>
      <Stack spacing={3} alignItems="center">
        <Button
          size="large"
          type="submit"
          variant="contained"
          sx={{
            width: 'fit-content',
            color: COLORS.PRIMARY_WHITE,
            bgcolor: COLORS.ACCENT_PRIMARY,
            ':hover': { bgcolor: COLORS.ACCENT_SECONDARY },
          }}
        >
          <Typography variant="body1" fontWeight={600}>
            Оформить заказ
          </Typography>
        </Button>
        <Typography variant="caption" sx={{ textAlign: 'center' }}>
          После оформления заказа с вами свяжется наш менеджер
        </Typography>
      </Stack>
    </Stack>
  )
}

export default OrderSubmission
