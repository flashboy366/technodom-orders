import { Button, ButtonProps, Typography } from '@mui/material'

const ProductQuantityButton = ({ onClick, children }: ButtonProps) => {
  return (
    <Button variant="text" sx={{ minWidth: 30, height: 40 }} onClick={onClick}>
      <Typography>{children}</Typography>
    </Button>
  )
}

export default ProductQuantityButton
