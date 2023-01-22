import { Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const TitleHeader = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Typography
      fontFamily="merriweather"
      variant={isDesktopMedia ? 'h2' : 'h3'}
      color={COLORS.PRIMARY}
      fontStyle="bold"
      fontWeight="700"
      textAlign={isDesktopMedia ? 'initial' : 'center'}
    >
      DostavimKZ.ru
    </Typography>
  )
}

export default TitleHeader
