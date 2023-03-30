import { Stack, Typography } from '@mui/material'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const FooterTip = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack>
      <Typography
        variant="body2"
        fontSize="x-small"
        fontWeight="600"
        textAlign={isDesktopMedia ? 'initial' : 'center'}
      >
        * Стоимость товара указана с учетом доставки и выдачи товара на
        центральном терминале в г. Челябинск, Свердловский тракт 5. При заказе
        товара в другой город до пункта выдачи заказов (ПВЗ) или услуги
        курьерской доставки до двери, необходимо оплатить данный сервис
        дополнительно.
      </Typography>
    </Stack>
  )
}

export default FooterTip
