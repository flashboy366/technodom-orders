import { Typography } from '@mui/material'

interface ProductPropertyTitleProps {
  title: string
}

const ProductPropertyTitle = ({ title }: ProductPropertyTitleProps) => {
  return (
    <Typography>
      {title}
      <Typography sx={{ display: 'inline', color: 'lightblue' }}> *</Typography>
    </Typography>
  )
}

export default ProductPropertyTitle
