import { Paper, Stack, Typography } from '@mui/material'
import TitleHeader from './title/TitleHeader'
import TitleDescription from './title/TitleDescription'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'

const Title = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={isDesktopMedia ? 2 : 1}
      spacing={2}
    >
      <Paper
        elevation={20}
        sx={{
          paddingY: 1,
          paddingX: 3,
          width: '99%',
          borderRadius: 0,
        }}
      >
        <Stack direction={isDesktopMedia ? 'row' : 'column'}>
          <Stack justifyItems="space-between" alignItems="flex-start">
            <TitleHeader />
            <TitleDescription />
          </Stack>
          <Stack
            direction={isDesktopMedia ? 'row' : 'column'}
            spacing={isDesktopMedia ? 8 : 0}
            alignItems={isDesktopMedia ? 'center' : 'flex-end'}
            marginX={isDesktopMedia ? 10 : 0}
          >
            <Stack direction="row" flex={1} alignItems="center" spacing={2}>
              <Typography
                variant={isDesktopMedia ? 'body2' : 'caption'}
                textAlign="end"
              >
                Доставка в течение нескольких дней
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  height: 80,
                  width: isDesktopMedia ? 60 : 85,
                  backgroundImage: `url(${'title/delivery_icon.png'})`,
                  backgroundSize: isDesktopMedia ? '90%' : '55%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </Stack>
            <Stack direction="row" flex={1} alignItems="center" spacing={2}>
              <Typography
                variant={isDesktopMedia ? 'body2' : 'caption'}
                textAlign="end"
              >
                Поддержка большинства способов оплаты
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  height: 80,
                  width: isDesktopMedia ? 200 : 85,
                  backgroundImage: `url(${'title/payment_methods.png'})`,
                  backgroundSize: '100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  )
}

export default Title
