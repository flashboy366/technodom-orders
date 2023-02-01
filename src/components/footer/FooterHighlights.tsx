import { Link, Stack, Typography } from '@mui/material'
import Image from 'mui-image'
import StyledImage from '../StyledImage'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const FooterHighlights = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack
      direction={isDesktopMedia ? 'row' : 'column-reverse'}
      spacing={3}
      alignSelf="center"
      alignItems="center"
    >
      <Stack direction="row" spacing={3}>
        <StyledImage
          url="payment_services/freedom_pay.png"
          height={50}
          width={140}
          size="100%"
        />
        <StyledImage
          url="payment_services/mastercard.png"
          height={50}
          width={90}
          size="90%"
        />
        <StyledImage
          url="payment_services/mir.svg"
          height={50}
          width={110}
          size="100%"
        />
      </Stack>
      <Stack direction="row" spacing={3}>
        <StyledImage
          url="payment_services/paypal.png"
          height={50}
          width={110}
          size="100%"
        />
        <StyledImage
          url="payment_services/visa.png"
          height={50}
          width={110}
          size="100%"
        />
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Link href="https://тк-луч.рф/" height={50}>
          <Image src="luch_logo.jpg" fit="contain" />
        </Link>
        <Typography variant="caption" width={200}>
          География доставки гарантирована сервисом нашего партнера ТК "ЛУЧ"
        </Typography>
      </Stack>
    </Stack>
  )
}

export default FooterHighlights
