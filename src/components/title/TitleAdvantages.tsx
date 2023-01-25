import { Paper, Stack, StackProps, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import Image from 'mui-image'

const TitleAdvantages = ({ ...props }: StackProps) => {
  return (
    <Stack
      spacing={1}
      marginTop={2}
      width="fit-content"
      {...props}
      direction="row"
      alignItems="center"
    >
      <Stack>
        <Typography fontWeight={500} variant="h5" color={COLORS.ACCENT_PRIMARY}>
          Наши преимущества
        </Typography>
        <Typography>
          - покупка и оперативная доставка товаров премиальных брендов:
        </Typography>
      </Stack>
      <Paper
        sx={{
          alignSelf: 'flex-end',
          borderRadius: 3,
          overflow: 'hidden',
          width: 400,
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
