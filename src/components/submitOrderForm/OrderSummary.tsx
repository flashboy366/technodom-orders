import { Stack, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/redux'
import { useFormContext } from 'react-hook-form'
import { COLORS } from '../../constants/materialui'

const OrderSummary = () => {
  const orderProductsState = useAppSelector(state => state.orderProducts)
  const {
    formState: { errors },
  } = useFormContext()

  let productsCount = 0
  orderProductsState.products.map(product => {
    if (product.productURL !== '') productsCount++
  })

  return (
    <Stack spacing={2}>
      <Stack
        justifyContent="space-between"
        alignSelf="center"
        alignItems="center"
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: '500',
          }}
          color={COLORS.ACCENT_PRIMARY}
          textAlign="center"
        >
          У вас {productsCount} товар(ов) на сумму
          {' ' + orderProductsState.totalPriceInTenge} т. (
          {orderProductsState.totalPriceInRubles.toString()} р.)
        </Typography>
        <Typography
          variant="body2"
          color={errors['orderPrice'] ? COLORS.ERROR_RED : 'initial'}
        >
          Мин. стоимость заказа : 35000 т. (5000 р.)
        </Typography>
      </Stack>
      <Typography
        variant="caption"
        fontWeight={300}
        sx={{
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
