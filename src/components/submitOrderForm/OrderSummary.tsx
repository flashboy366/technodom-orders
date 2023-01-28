import { Stack, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/redux'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'
import { useFormContext } from 'react-hook-form'
import { COLORS } from '../../constants/materialui'

const OrderSummary = () => {
  const orderProductsState = useAppSelector(state => state.orderProducts)

  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  const {
    formState: { errors },
  } = useFormContext()

  return (
    <Stack spacing={2} marginBottom={10}>
      <Stack
        justifyContent="space-between"
        alignSelf="flex-end"
        alignItems="flex-end"
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: '500',
          }}
          color={COLORS.ACCENT_PRIMARY}
          textAlign="right"
        >
          У вас {orderProductsState.products.length} товар(ов) на сумму
          {' ' + orderProductsState.productsPricesSumInTenge} т. (
          {orderProductsState.productsPricesSumInRubles !== 0
            ? orderProductsState.totalPriceInRubles.toString()
            : Number(0).toString()}{' '}
          р.)
        </Typography>
        <Typography
          variant="body2"
          color={errors['orderPrice'] ? COLORS.ERROR_RED : 'initial'}
        >
          Мин. стоимость заказа : 5000 р.
        </Typography>
      </Stack>
      <Typography
        variant="caption"
        fontWeight={300}
        sx={{
          width: isDesktopMedia ? '60%' : '100%',
          margin: 1,
          alignSelf: 'flex-end',
        }}
        textAlign="right"
      >
        Стоимость товара указана с учетом доставки и выдачи товара на складе в
        г. Челябинск, Свердловский тракт 5. Стоимость доставки до адреса и в
        другие города необходимо согласовать с оператором.
      </Typography>
    </Stack>
  )
}

export default OrderSummary
