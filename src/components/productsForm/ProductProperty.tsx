import { Stack, TextField, Typography } from '@mui/material'
import { PayloadAction } from '@reduxjs/toolkit'

interface ProductPropertyProps {
  title: string
  value: string | number
  onChange: (value: number) => PayloadAction<unknown, string>
  type?: string
}

const ProductProperty = ({
  title,
  value,
  onChange,
  type,
}: ProductPropertyProps) => {
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
        type={type}
        value={value}
        onChange={event =>
          onChange(
            parseInt(event.target.value !== '' ? event.target.value : '0')
          )
        }
      />
    </Stack>
  )
}

export default ProductProperty
