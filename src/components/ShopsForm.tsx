import { Link, Stack, Typography } from '@mui/material'
import FormWrapper from './FormWrapper'
import HowToButton from './HowToButton'

const ShopsForm = () => {
  return (
    <FormWrapper title="">
      <Stack spacing={3} alignItems="center" justifyContent="space-around">
        <HowToButton />
        <Typography textAlign="center">
          Обратите внимание на ограничения по стоимости товаров при доставке из
          США: стоимость одного товара не может превышать $300, общая стоимость
          посылки от $100 до $500. Подробнее об ограничениях{' '}
          <Link>по ссылке</Link>
        </Typography>
      </Stack>
    </FormWrapper>
  )
}

export default ShopsForm
