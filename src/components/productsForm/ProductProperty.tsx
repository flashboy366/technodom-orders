import { Stack, TextField, Typography } from '@mui/material'
import { PayloadAction } from '@reduxjs/toolkit'

interface ProductPropertyProps {
  title: string
  value: string | number
  onChange: (value: unknown) => PayloadAction<unknown, string>
}

const ProductProperty = ({ title, value, onChange }: ProductPropertyProps) => {
  return (
    <Stack spacing={1}>
      <Typography>
        {title}
        <Typography sx={{ display: 'inline', color: 'lightblue' }}>
          {' '}
          *
        </Typography>
      </Typography>
      <TextField
        sx={{ width: '100%' }}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </Stack>
  )
}

export default ProductProperty
