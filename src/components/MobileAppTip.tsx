import {
  Box,
  Button,
  Link,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material'
import Image from 'mui-image'
import { useState } from 'react'
import useIsMedia from '../hooks/useIsMedia'
import { desktopMediaSelector } from '../util/materialui'

const MobileAppTip = () => {
  const [tipShown, setTipShown] = useState(true)

  const [isDesktopMedia] = useIsMedia(desktopMediaSelector())

  return (
    <Snackbar open={tipShown}>
      <Paper
        sx={{
          padding: 1,
          width: isDesktopMedia ? 400 : '100%',
          height: isDesktopMedia ? 'fit-content' : 'initial',
          boxSizing: 'border-box',
          alignSelf: 'center',
        }}
      >
        <Stack direction="row" alignItems="center">
          <Typography variant="body2">
            С мобильным приложением заказывать у поставщика Technodom.KZ
            удобнее!
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
        <Stack direction="row" spacing={2} justifyContent="center">
          <Link
            href="https://play.google.com/store/apps/details?id=kz.technodom.mobile"
            width="115%"
          >
            <Image src={'technodom_mobile_googleplay_logo.png'} fit="contain" />
          </Link>
          <Link
            href="https://apps.apple.com/kz/app/technodom-kz/id1435756761"
            width="100%"
            paddingRight={1.5}
          >
            <Image src={'technodom_mobile_appstore_logo.png'} fit="contain" />
          </Link>
        </Stack>
      </Paper>
    </Snackbar>
  )
}

export default MobileAppTip
