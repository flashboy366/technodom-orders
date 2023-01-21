import { Box, Stack, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import Image from 'mui-image'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const TitlePaymentOptions = () => {
  const [iseDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack direction="row" alignItems="center" spacing={2} paddingTop={2}>
      <Stack width="fit-content">
        <Typography color={COLORS.ACCENT_PURPLE} fontWeight={600}>
          Способы оплаты
        </Typography>
        <Typography>Картами платежной системы "Мир"</Typography>
        <Typography>Наличными в национальной валюте</Typography>
      </Stack>
      <Box borderRadius={7} overflow={'hidden'}>
        <Image
          src={'mir_card.jpg'}
          height={iseDesktopMedia ? 100 : 90}
          width={iseDesktopMedia ? 150 : 120}
        />
      </Box>
    </Stack>
  )
}

export default TitlePaymentOptions
