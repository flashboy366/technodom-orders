import { Stack, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'

const TitleAdvantages = () => {
  return (
    <Stack spacing={0} marginTop={2} width="fit-content">
      <Typography
        fontWeight={500}
        variant="h5"
        color={COLORS.ACCENT_PURPLE}
        marginBottom={1}
      >
        Наши преимущества
      </Typography>
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
  )
}

export default TitleAdvantages
