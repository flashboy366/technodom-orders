import { Button, Stack, Typography } from '@mui/material'
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
        </Stack>
        <Stack>
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
