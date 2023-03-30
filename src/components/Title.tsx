import { Paper, Stack } from '@mui/material'
import TitleDescription from './title/TitleDescription'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'
import TitleAdvantages from './title/TitleAdvantages'

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
        <Stack justifyItems="space-between" alignItems="space-between">
          <TitleDescription />
          <TitleAdvantages />
        </Stack>
      </Paper>
    </Stack>
  )
}

export default Title
