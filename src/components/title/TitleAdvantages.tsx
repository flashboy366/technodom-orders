import { Paper, Stack, StackProps, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import Image from 'mui-image'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const TitleAdvantages = ({ ...props }: StackProps) => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack
      spacing={1}
      marginTop={2}
      width="fit-content"
      {...props}
      direction={isDesktopMedia ? 'row' : 'column'}
      alignItems="center"
    >
      <Stack width={isDesktopMedia ? 'initial' : 300}>
        <Typography fontWeight={500} variant="h5" color={COLORS.ACCENT_PRIMARY}>
          Наши преимущества
        </Typography>
        <Typography>
          покупка и оперативная доставка товаров премиальных брендов:
        </Typography>
      </Stack>
      <Paper
        sx={{
          alignSelf: isDesktopMedia ? 'flex-end' : 'initial',
          borderRadius: 3,
          overflow: 'hidden',
          width: isDesktopMedia ? 400 : 300,
        }}
      >
        <Image
          src="title_advantages_partners.png"
          // width={isDesktopMedia ? 550 : '100%'}
          height={110}
          fit="contain"
        />
      </Paper>
    </Stack>
  )
}

export default TitleAdvantages
