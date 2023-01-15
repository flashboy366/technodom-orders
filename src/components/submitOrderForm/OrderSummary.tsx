import { Stack, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/redux'

const OrderSummary = () => {
  const orderProductsState = useAppSelector(state => state.orderProducts)

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2" sx={{ textAlign: 'left' }}>
          У вас {orderProductsState.products.length} товара на сумму{' '}
          {orderProductsState.productsPricesSum} р.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'right',
            fontWeight: '500',
            alignSelf: 'flex-end',
          }}
        >
          Итого: {orderProductsState.totalPrice} р.
        </Typography>
      </Stack>
      <Typography
        variant="caption"
        fontWeight={300}
        sx={{ textAlign: 'center', margin: 1 }}
      >
        Стоимость товара указана с учетом доставки и выдачи товара на складе в
        г. Челябинск, Свердловский тракт 5. Стоимость доставки до адреса и в
        другие города необходимо согласовать с оператором по тел:
      </Typography>
    </Stack>
  )
}

export default OrderSummary
