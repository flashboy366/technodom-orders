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
      alignItems={isDesktopMedia ? 'center' : 'flex-start'}
      marginX={isDesktopMedia ? 10 : 0}
      marginY={isDesktopMedia ? 0 : 6}
    >
      <Stack marginY={isDesktopMedia ? 1 : 0}>
        <Typography variant="body2" fontWeight="bold">
          Наши преимущества:
        </Typography>
        {advantages.map((el, i) => (
          <Typography key={i} variant="caption">
            {el}
          </Typography>
        ))}
      </Stack>
      <Stack
        direction="column"
        flex={1}
        alignItems={isDesktopMedia ? 'center' : 'flex-start'}
        spacing={isDesktopMedia ? 1 : 0}
        width={isDesktopMedia ? 'initial' : '70%'}
      >
        <Paper
          elevation={0}
          sx={{
            height: 80,
            width: isDesktopMedia ? 200 : 150,
            backgroundImage: `url(${'title/iherb_logo.png'})`,
            backgroundSize: isDesktopMedia ? '60%' : '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Typography
          variant={'caption'}
          textAlign={isDesktopMedia ? 'center' : 'left'}
        >
          Компания iHerb, глобальный лидер в области товаров для здорового
          образа жизни
        </Typography>
      </Stack>
    </Stack>
  )
}

export default TitleAdvantages
