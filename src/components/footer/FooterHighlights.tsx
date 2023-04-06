import { Stack } from '@mui/material'
import StyledImage from '../StyledImage'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const FooterHighlights = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack
      direction={isDesktopMedia ? 'row' : 'column'}
      spacing={3}
      alignSelf="center"
      alignItems="center"
      justifyContent={isDesktopMedia ? 'center' : 'space-between'}
    >
      <Stack direction="column" spacing={3} justifyContent="space-between">
        <Stack direction="row" spacing={3}>
          <StyledImage
            url="payment_services/mir.svg"
            height={50}
            width={110}
            size="100%"
          />
          <StyledImage
            url="payment_services/mastercard.png"
            height={50}
            width={90}
            size="90%"
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
      </Stack>
      <StyledImage
        url="payment_services/qr-payment.png"
        height={260}
        width={260}
        size="100%"
      />
    </Stack>
  )
}

export default FooterHighlights
