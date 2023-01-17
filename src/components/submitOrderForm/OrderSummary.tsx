import { Stack, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/redux'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const OrderSummary = () => {
  const orderProductsState = useAppSelector(state => state.orderProducts)

  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack spacing={2}>
      <Stack
        justifyContent="space-between"
        alignSelf="flex-end"
        alignItems="flex-end"
      >
        <Typography variant="body2">
          У вас {orderProductsState.products.length} товар(ов) на сумму{' '}
          {orderProductsState.productsPricesSumInRubles} р.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: '500',
          }}
        >
          Итого:{' '}
          {orderProductsState.totalPriceInRubles !== 0
            ? orderProductsState.totalPriceInRubles
            : 0}{' '}
          р.
        </Typography>
      </Stack>
      <Typography
        variant="caption"
        fontWeight={300}
        sx={{
          width: isDesktopMedia ? '60%' : '100%',
          margin: 1,
          alignSelf: 'center',
        }}
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
