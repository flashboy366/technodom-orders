import { Stack, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/redux'

const OrderSummary = () => {
  const orderProductsState = useAppSelector(state => state.orderProducts)

  return (
    <Stack spacing={2}>
      <Stack
        justifyContent="space-between"
        alignSelf="flex-end"
        alignItems="flex-end"
      >
        <Typography variant="body2">
          У вас {orderProductsState.products.length} товар(ов) на сумму{' '}
          {orderProductsState.productsPricesSum} р.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: '500',
          }}
        >
          Итого:{' '}
          {orderProductsState.productsPricesSum !== 0
            ? orderProductsState.totalPrice
            : 0}{' '}
          р.
        </Typography>
      </Stack>
      <Typography
        variant="caption"
        fontWeight={300}
        sx={{ width: '60%', margin: 1, alignSelf: 'center' }}
        textAlign="center"
      >
        Стоимость товара указана с учетом доставки и выдачи товара на складе в
        г. Челябинск, Свердловский тракт 5. Стоимость доставки до адреса и в
        другие города необходимо согласовать с оператором.
      </Typography>
    </Stack>
  )
}

export default OrderSummary
