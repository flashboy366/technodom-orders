import { Stack, TextField, Typography } from '@mui/material'

interface ProductPropertyProps {
  title: string
  value: number
  type?: string
  onChange: (value: number) => void
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
        value={value !== 0 ? value : ''}
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
