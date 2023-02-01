import { Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'

const TitleHeader = () => {
  return (
    <Typography
      fontFamily="merriweather"
      variant="overline"
      color={COLORS.PRIMARY}
      fontStyle="bold"
      fontWeight="700"
      fontSize="x-large"
    >
      DostavimKZ.ru
    </Typography>
  )
}

export default TitleHeader
