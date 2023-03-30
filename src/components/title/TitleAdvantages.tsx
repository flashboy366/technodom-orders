import { Paper, Stack, Typography } from '@mui/material'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const TitleAdvantages = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  const advantages = [
    '- весь ассортиментов товаров на официальном сайте iHerb',
    '- стоимость товара до 30-50% ниже, чем на маркетплейсах',
    '- доставка товара из США в течение 3-х недель',
    '- мы находимся в Челябинске и занимаемся доставкой товаров более 10 лет',
    '- нет необходимости заполнять таможенные декларации',
  ]

  return (
    <Stack
      direction={isDesktopMedia ? 'row' : 'column'}
      spacing={isDesktopMedia ? 8 : 2}
      alignItems={'center'}
      marginY={isDesktopMedia ? 2 : 1}
      justifyItems="space-between"
      marginX={isDesktopMedia ? 8 : 0}
    >
      <Stack
        direction="column"
        alignItems={'center'}
        spacing={isDesktopMedia ? 1 : 0}
        width={'100%'}
        flex={1}
      >
        <Paper
          elevation={0}
          sx={{
            height: 100,
            width: '100%',
            backgroundImage: `url(${'title/iherb-products.png'})`,
            backgroundSize: isDesktopMedia ? '100%' : '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </Stack>
      <Stack marginY={isDesktopMedia ? 1 : 0} flex={1} alignItems="flex-start">
        {advantages.map((advantageString, i) => (
          <Typography key={i} variant="caption">
            {advantageString}
          </Typography>
        ))}
      </Stack>
    </Stack>
  )
}

export default TitleAdvantages
