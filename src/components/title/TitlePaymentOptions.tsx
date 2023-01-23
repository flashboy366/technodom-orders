import { Box, Stack, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import Image from 'mui-image'
import useIsMedia from '../../hooks/useIsMedia'
import { desktopMediaSelector } from '../../util/materialui'

const TitlePaymentOptions = () => {
  const [iseDesktopMedia] = useIsMedia(desktopMediaSelector())

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Stack width="fit-content">
        <Typography color={COLORS.ACCENT_PRIMARY} variant="h6" fontWeight={600}>
          Способы оплаты
        </Typography>
        <Typography>- картами платежной системы "Мир"</Typography>
        <Typography>- наличными в национальной валюте</Typography>
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
