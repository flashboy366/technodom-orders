import { Typography } from '@mui/material'

interface ProductPropertyTitleProps {
  title: string
}

const ProductPropertyTitle = ({ title }: ProductPropertyTitleProps) => {
  return (
    <Typography flex={2}>
      {title}
      <Typography sx={{ display: 'inline', color: 'lightblue' }}> *</Typography>
    </Typography>
  )
}

export default ProductPropertyTitle
