import { Stack, Typography } from '@mui/material'
import FooterLuch from './footer/FooterLuch'
import FooterContacts from './footer/FooterContacts'
import FooterHighlights from './footer/FooterHighlights'
import FooterTip from './footer/FooterTip'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'

const Footer = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack
      spacing={isDesktopMedia ? 0 : 4}
      alignItems={isDesktopMedia ? 'flex-start' : 'center'}
      marginTop={30}
    >
      <Typography variant="body2" fontWeight="bold">
        Способы оплаты
      </Typography>
      <Stack
        direction={isDesktopMedia ? 'row' : 'column'}
        width="100%"
        justifyContent="space-between"
        alignItems={'center'}
        spacing={isDesktopMedia ? 0 : 5}
      >
        <FooterHighlights />
        <FooterContacts />
        <FooterLuch />
      </Stack>
      <FooterTip />
    </Stack>
  )
}

export default Footer
