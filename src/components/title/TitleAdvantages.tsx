import { Paper, Stack, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import Image from 'mui-image'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const TitleAdvantages = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack spacing={1} marginTop={2} width="fit-content">
      <Typography fontWeight={500} variant="h5" color={COLORS.ACCENT_PRIMARY}>
        Наши преимущества
      </Typography>
      {/*<Typography>- возможность купить оригинальные бренды</Typography>*/}
      {/*<Typography>- выбор товара у официальных поставщиков</Typography>*/}
      {/*<Typography>- ежедневная доставка</Typography>*/}
      {/*<Typography>- осмотр товара при получении</Typography>*/}
      {/*<Typography>*/}
      {/*  - оплата при получении товара*/}
      {/*  <Typography display="inline" fontWeight={600}>*/}
      {/*    **/}
      {/*  </Typography>*/}
      {/*</Typography>*/}
      {/*<Typography>*/}
      {/*  - пополнение реестра поставщиков по Вашим запросам*/}
      {/*</Typography>*/}
      {/*<Typography>- широкая география доставки</Typography>*/}
      <Typography>
        - покупка и оперативная доставка товаров премиальных брендов:
      </Typography>
      <Paper
        sx={{ alignSelf: 'flex-end', borderRadius: 3, overflow: 'hidden' }}
      >
        <Image
          src="title_advantages_partners.png"
          width={isDesktopMedia ? 550 : '100%'}
        />
      </Paper>
    </Stack>
  )
}

export default TitleAdvantages
