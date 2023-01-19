import { Stack, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'

const TitleAdvantages = () => {
  return (
    <Stack width="fit-content" marginTop={2}>
      <Typography fontStyle="italic" color={COLORS.BRAND_ORANGE}>
        Наши преимущества
      </Typography>
      <Typography>
        - возможность купить ушедшие бренды
        <Typography>- выбор товара у официальных поставщиков</Typography>
        <Typography>- ежедневная доставка из г. Костанай</Typography>
        <Typography>
          - оплата картами Мир или наличными при получении товара
          <Typography display="inline" fontWeight={600}>
            *
          </Typography>
        </Typography>
        <Typography>- широкая география доставки</Typography>
      </Typography>
    </Stack>
  )
}

export default TitleAdvantages
