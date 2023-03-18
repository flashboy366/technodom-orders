import { Paper, Stack, Typography } from '@mui/material'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const TitleAdvantages = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    // <Stack
    //   direction={isDesktopMedia ? 'row' : 'column'}
    //   spacing={isDesktopMedia ? 8 : 0}
    //   alignItems={isDesktopMedia ? 'center' : 'flex-end'}
    //   marginX={isDesktopMedia ? 10 : 0}
    // >
    //   <Stack direction="row" flex={1} alignItems="center" spacing={2}>
    //     <Typography
    //       variant={isDesktopMedia ? 'body2' : 'caption'}
    //       textAlign="end"
    //     >
    //       Доставка в течение нескольких дней
    //     </Typography>
    //     <Paper
    //       elevation={0}
    //       sx={{
    //         height: 80,
    //         width: isDesktopMedia ? 60 : 85,
    //         backgroundImage: `url(${'title/delivery_icon.png'})`,
    //         backgroundSize: isDesktopMedia ? '90%' : '55%',
    //         backgroundPosition: 'center',
    //         backgroundRepeat: 'no-repeat',
    //       }}
    //     />
    //   </Stack>
    //   <Stack direction="row" flex={1} alignItems="center" spacing={2}>
    //     <Typography
    //       variant={isDesktopMedia ? 'body2' : 'caption'}
    //       textAlign="end"
    //     >
    //       Поддержка большинства способов оплаты
    //     </Typography>
    //     <Paper
    //       elevation={0}
    //       sx={{
    //         height: 80,
    //         width: isDesktopMedia ? 200 : 85,
    //         backgroundImage: `url(${'title/payment_methods.png'})`,
    //         backgroundSize: '100%',
    //         backgroundPosition: 'center',
    //         backgroundRepeat: 'no-repeat',
    //       }}
    //     />
    //   </Stack>
    // </Stack>
    <Stack
      direction={isDesktopMedia ? 'row' : 'column'}
      spacing={isDesktopMedia ? 8 : 2}
      alignItems={isDesktopMedia ? 'center' : 'flex-start'}
      marginX={isDesktopMedia ? 10 : 0}
      marginY={isDesktopMedia ? 0 : 6}
    >
      <Stack marginY={isDesktopMedia ? 1 : 0}>
        <Typography variant="body1" fontWeight="bold">
          Наши преимущества:
        </Typography>
        <Typography>
          - весь ассортиментов товаров на официальном сайте iHerb
        </Typography>
        <Typography>
          - стоимость товара до 30-50% ниже, чем на маркетплейсах
        </Typography>
        <Typography>- доставка товара из США в течение 3-х недель</Typography>
        <Typography>
          - мы находимся в Челябинске и занимаемся доставкой товаров более 10
          лет
        </Typography>
        <Typography>
          - нет необходимости заполнять таможенные декларации
        </Typography>
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
            width: isDesktopMedia ? 200 : 85,
            backgroundImage: `url(${'title/iherb_logo.png'})`,
            backgroundSize: isDesktopMedia ? '60%' : '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Typography
          variant={isDesktopMedia ? 'body2' : 'caption'}
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
