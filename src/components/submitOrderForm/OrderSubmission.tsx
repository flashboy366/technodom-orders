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
              variant="subtitle2"
              textAlign="center"
            >
              Я ознакомился и принимаю условия{' '}
              <Link href="docs/Оферта ТОО ВМ Логистика (29.01.23).pdf">
                договора оферты
              </Link>{' '}
              и{' '}
              <Link href="docs/Соглашение_о_конфиденциальности_2023.pdf">
                соглашения о конфиденциальности персональных данных
              </Link>
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
        <Typography
          variant="caption"
          sx={{ textAlign: 'center' }}
          fontWeight={300}
        >
          После оформления заказа с вами свяжется наш менеджер
        </Typography>
      </Stack>
    </Stack>
  )
}

export default OrderSubmission
