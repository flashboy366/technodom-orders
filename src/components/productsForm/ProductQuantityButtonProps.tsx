import { Button, ButtonProps, Typography } from '@mui/material'

const ProductQuantityButton = ({ onClick, children }: ButtonProps) => {
  return (
    <Button sx={{ height: 56 }} onClick={onClick} variant="text">
      <Typography variant="h5">{children}</Typography>
    </Button>
  )
}

export default ProductQuantityButton
