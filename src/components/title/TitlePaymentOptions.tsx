import { Box, Stack, StackProps, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import Image from 'mui-image'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const TitlePaymentOptions = ({ ...props }: StackProps) => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack
      direction={isDesktopMedia ? 'row' : 'column'}
      alignItems="center"
      spacing={2}
      {...props}
    >
      <Stack width="fit-content">
        <Typography color={COLORS.ACCENT_PRIMARY} variant="h6" fontWeight={600}>
          Способы оплаты
        </Typography>
        <Typography>- Картами платежной системы "Мир"</Typography>
        <Typography>- Наличными в национальной валюте</Typography>
      </Stack>
      <Box borderRadius={7} overflow={'hidden'}>
        <Image
          src={'mir_card.jpg'}
          height={isDesktopMedia ? 100 : 90}
          width={isDesktopMedia ? 150 : 120}
        />
      </Box>
    </Stack>
  )
}

export default TitlePaymentOptions
