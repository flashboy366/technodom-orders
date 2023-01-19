import { Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const TitleHeader = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Typography
      fontFamily="serif"
      variant="h2"
      color={COLORS.SECONDARY_ORANGE}
      fontStyle="italic"
      fontWeight="600"
      textAlign={isDesktopMedia ? 'initial' : 'center'}
    >
      DostavimKZ
    </Typography>
  )
}

export default TitleHeader
