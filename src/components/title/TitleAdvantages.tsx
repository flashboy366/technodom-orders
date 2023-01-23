import { Paper, Stack, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import Image from 'mui-image'
import useIsMedia from '../../hooks/useIsMedia'
import { desktopMediaSelector } from '../../util/materialui'

const TitleAdvantages = () => {
  const [isDesktopMedia] = useIsMedia(desktopMediaSelector())

  return (
    <Stack
      spacing={2}
      marginTop={2}
      width="fit-content"
      direction={isDesktopMedia ? 'row' : 'column'}
    >
      <Stack width={isDesktopMedia ? 250 : '100%'}>
        <Typography fontWeight={500} variant="h5" color={COLORS.ACCENT_PRIMARY}>
          Наши преимущества
        </Typography>
        <Typography>
          - покупка и оперативная доставка товаров премиальных брендов
        </Typography>
      </Stack>
      <Paper
        sx={{ alignSelf: 'flex-end', borderRadius: 3, overflow: 'hidden' }}
      >
        <Image
          src="title_advantages_partners.png"
          width={isDesktopMedia ? 300 : '100%'}
        />
      </Paper>
    </Stack>
  )
}

export default TitleAdvantages
