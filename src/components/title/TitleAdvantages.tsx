import { Box, Stack, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import Image from 'mui-image'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const TitleAdvantages = () => {
  const [isDesktopWidth] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack spacing={2} marginTop={2}>
      <Stack width="fit-content">
        <Typography color={COLORS.ACCENT_BLUE}>Наши преимущества</Typography>
        <Typography>- возможность купить оригинальные бренды</Typography>
        <Typography>- выбор товара у официальных поставщиков</Typography>
        <Typography>- ежедневная доставка</Typography>
        <Typography>- осмотр товара при получении</Typography>
        <Typography>
          - оплата при получении товара
          <Typography display="inline" fontWeight={600}>
            *
          </Typography>
        </Typography>
        <Typography>
          - пополнение реестра поставщиков по Вашим запросам
        </Typography>
        <Typography>- широкая география доставки</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack width="fit-content" marginTop={2}>
          <Typography color={COLORS.ACCENT_BLUE}>Способы оплаты</Typography>
          <Typography>Картами платежной системы "Мир"</Typography>
          <Typography>Наличными в национальной валюте</Typography>
        </Stack>
        <Box>
          <Image
            src={'world_cards.png'}
            height={87}
            width={isDesktopWidth ? 180 : 180}
          />
        </Box>
      </Stack>
    </Stack>
  )
}

export default TitleAdvantages
