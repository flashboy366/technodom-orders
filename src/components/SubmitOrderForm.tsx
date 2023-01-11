import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material'
import FormWrapper from './FormWrapper'

const SubmitOrderForm = () => {
  return (
    <FormWrapper title="Оформление заказа">
      <Stack spacing={2}>
        <Stack>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            У вас 1 товара на сумму 19000 рублей
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Стоимость доставки: 500 рублей
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', fontWeight: '500' }}
          >
            Итого: 19500 рублей
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
            control={<Checkbox />}
            label={
              <Typography variant="caption" fontWeight={300} textAlign="center">
                Я ознакомился и принимаю условия договора оферты и соглашение на
                обработку персональных данных
              </Typography>
            }
          />
          <Button>Оформить заказ</Button>
          <Typography variant="caption" sx={{ textAlign: 'center' }}>
            После оформления заказа с вами свяжется наш менеджер
          </Typography>
        </Stack>
      </Stack>
    </FormWrapper>
  )
}

export default SubmitOrderForm
