import { Box, Stack, Typography } from '@mui/material'
import FormProductInput from '../react-hook-form/FormProductInput'
import Product from '../../types/Product'
import { ChangeEvent } from 'react'

interface ProductArticleProps {
  index: number
  productState: Product
  updateProductURL: (productURL: string) => void
}

const ProductURL = ({
  index,
  productState,
  updateProductURL,
}: ProductArticleProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateProductURL(event.target.value)
  }

  return (
    <Stack spacing={2} width={200}>
      <Typography>Ссылка</Typography>
      <Box>
        <FormProductInput
          fullWidth
          index={index}
          name={`productURL`}
          placeholder="Вставьте ссылку"
          value={productState.productURL}
          registerOnChange={handleInputChange}
          registerOnBlur={handleInputChange}
        />
      </Box>
    </Stack>
  )
}

export default ProductURL
