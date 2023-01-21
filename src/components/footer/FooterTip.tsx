import { Stack, Typography } from '@mui/material'

const FooterTip = () => {
  return (
    <Stack>
      <Typography variant="body2" fontSize="x-small" fontWeight="600">
        * При заказе до адреса заказчика необходимо оплатить сервисный сбор и
        стоимость доставки от региональных терминалов в городах Астана, Костанай
        и Челябинск. Покупатель может запросить сервис по осмотру товара на
        терминалах или видео приема товара от поставщиков, заблаговременно
        уведомив при оформлении заказа (комментарии к заказу).
      </Typography>
    </Stack>
  )
}

export default FooterTip
