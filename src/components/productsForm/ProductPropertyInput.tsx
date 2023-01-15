import { Box, TextField } from '@mui/material'

interface ProductPropertyInputProps {
  value: number | undefined
  updateProductState: (newValue: number | undefined) => void
  updateProductData: () => Promise<void>
}

const ProductPropertyInput = ({
  value,
  updateProductState,
}: ProductPropertyInputProps) => {
  const validatePropertyChange = (value: number) => {
    if (!value) return 0
    if (value >= 0) return value
  }

  return (
    <Box flex={2}>
      <TextField
        placeholder="Скопируйте артикул..."
        sx={{ width: '100%' }}
        value={value?.toString()}
        onChange={event =>
          updateProductState(
            validatePropertyChange(parseInt(event.target.value))
          )
        }
      />
    </Box>
  )
}

export default ProductPropertyInput
