import { Stack, TextField, Typography } from '@mui/material'

interface ProductPropertyProps {
  title: string
}

const ProductProperty = ({ title }: ProductPropertyProps) => {
  return (
    <Stack spacing={1}>
      <Typography>
        {title}
        <Typography sx={{ display: 'inline', color: 'lightblue' }}>
          {' '}
          *
        </Typography>
      </Typography>
      <TextField sx={{ width: '100%' }} />
    </Stack>
  )
}

export default ProductProperty
