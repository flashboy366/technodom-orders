import { Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

const TitleDescription = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Typography
      fontFamily="merriweather"
      variant="overline"
      color={COLORS.PRIMARY}
      fontStyle="bold"
      fontWeight="700"
      fontSize={24}
      lineHeight={isDesktopMedia ? 3 : 1.5}
      textAlign="center"
      marginY={isDesktopMedia ? 0 : 2}
    >
      Интернет-сервис по выкупу и доставке продукции iHerb в Россию
    </Typography>
  )
}

export default TitleDescription
