import { Box, TextField } from '@mui/material'

interface ProductPropertyInputProps {
  value: number | undefined
  updateProductState: (newValue: number | undefined) => void
  updateProductData: () => Promise<void>
}

const ProductPropertyInput = ({
  value,
  updateProductState,
  updateProductData,
}: ProductPropertyInputProps) => {
  const validatePropertyChange = (value: number) => {
    if (!value) return 0
    if (value >= 0) return value
  }

  return (
    <Box flex={2}>
      <TextField
        sx={{ width: '100%' }}
        value={value?.toString()}
        onChange={event =>
          updateProductState(
            validatePropertyChange(parseInt(event.target.value))
          )
        }
        onBlur={() => {
          updateProductData()
        }}
      />
    </Box>
  )
}

export default ProductPropertyInput
