import { Paper, Stack } from '@mui/material'
import TitleHeader from './title/TitleHeader'
import TitleDescription from './title/TitleDescription'
import TitlePaymentOptions from './title/TitlePaymentOptions'
import TitleAdvantages from './title/TitleAdvantages'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'

const Title = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      marginTop={1}
      marginBottom={2}
      spacing={2}
    >
      <Paper sx={{ paddingY: 1, paddingX: 3 }}>
        <Stack justifyItems="space-between" alignItems="center">
          <TitleHeader />
          <TitleDescription />
        </Stack>
      </Paper>
      <Stack
        direction={isDesktopMedia ? 'row' : 'column'}
        spacing={2}
        alignItems="center"
        height={isDesktopMedia ? 120 : 'initial'}
      >
        <TitlePaymentOptions flex={1} />
        <TitleAdvantages flex={1} />
      </Stack>
    </Stack>
  )
}

export default Title
