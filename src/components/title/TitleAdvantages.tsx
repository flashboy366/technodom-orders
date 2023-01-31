import { Stack, StackProps, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const TitleAdvantages = ({ ...props }: StackProps) => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack
      marginTop={isDesktopMedia ? 0 : 2}
      width="fit-content"
      {...props}
      direction={isDesktopMedia ? 'row' : 'column'}
      alignItems="center"
      height="100%"
    >
      <Stack width={isDesktopMedia ? 'initial' : 300} flex={1}>
        <Typography
          fontWeight={500}
          variant="body1"
          color={COLORS.ACCENT_PRIMARY}
        >
          Наши преимущества
        </Typography>
        <Typography variant="body2">
          покупка и оперативная доставка товаров премиальных брендов:
        </Typography>
      </Stack>
      <img
        src="title_advantages_partners.png"
        alt=""
        style={{ objectFit: 'contain', flex: 1 }}
        height={120}
      />
    </Stack>
  )
}

export default TitleAdvantages
