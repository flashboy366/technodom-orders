import { Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import useIsMedia from '../../hooks/useIsMedia'
import { desktopMediaSelector } from '../../util/materialui'

const TitleHeader = () => {
  const [isDesktopMedia] = useIsMedia(desktopMediaSelector())

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
