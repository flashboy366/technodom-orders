import { Stack, StackProps, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
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
      <Stack flex={1}>
        <Typography
          color={COLORS.ACCENT_PRIMARY}
          variant="body1"
          fontWeight={600}
        >
          Способы оплаты
        </Typography>
        <Typography variant="body2">
          - картами платежных систем (кроме карт выпущенных в РФ и РБ)
        </Typography>
        <Typography variant="body2">
          - картами платежной системы "Мир"
        </Typography>
        <Typography variant="body2">- платежная система Freedom Pay</Typography>
        <Typography variant="body2">
          - наличными в национальной валюте
        </Typography>
      </Stack>
      <img
        src={'mir_card.jpg'}
        alt=""
        style={{ objectFit: 'contain', flex: 1, borderRadius: 7 }}
        height={120}
      />
    </Stack>
  )
}

export default TitlePaymentOptions
