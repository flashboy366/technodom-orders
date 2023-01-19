import { Box, Button, Link, Paper, Stack, Typography } from '@mui/material'
import Image from 'mui-image'
import { useState } from 'react'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'

const MobileAppTip = () => {
  const [tipShown, setTipShown] = useState(true)

  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return tipShown ? (
    <Paper
      sx={{
        padding: 1,
        width: isDesktopMedia ? 'fit-content' : '100%',
        height: isDesktopMedia ? 'fit-content' : 'initial',
        boxSizing: 'border-box',
        alignSelf: 'center',
      }}
    >
      <Stack direction="row" alignItems="center">
        <Typography variant="body2">
          С мобильным приложением Technodom.KZ заказывать удобнее!
        </Typography>
        <Box width={50}>
          <Button
            style={{ backgroundColor: 'transparent' }}
            sx={{ width: 50 }}
            disableRipple
            onClick={() => setTipShown(false)}
          >
            ╳
          </Button>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} marginTop={1} justifyContent="center">
        <Link href="https://play.google.com/store/apps/details?id=kz.technodom.mobile">
          <Image src={'technodom_mobile_googleplay_logo.png'} />
        </Link>
        <Link href="https://apps.apple.com/kz/app/technodom-kz/id1435756761">
          <Image src={'technodom_mobile_appstore_logo.png'} />
        </Link>
      </Stack>
    </Paper>
  ) : null
}

export default MobileAppTip
