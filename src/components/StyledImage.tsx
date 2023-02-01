import { Paper } from '@mui/material'

interface StyledImageProps {
  url: string
  height: number
  width: number
  size: string
}

const StyledImage = ({ url, height, width, size }: StyledImageProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${url})`,
        backgroundSize: size,
        height: height,
        width: width,
      }}
    />
  )
}

export default StyledImage
