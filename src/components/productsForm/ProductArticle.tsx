import ProductPropertyTitle from './ProductPropertyTitle'
import { Box, Stack } from '@mui/material'
import FormProductInput from '../react-hook-form/FormProductInput'
import Product from '../../types/Product'

interface ProductArticleProps {
  index: number
  productState: Product
  updateArticle: (newArticle: number | undefined) => void
}

const ProductArticle = ({
  index,
  productState,
  updateArticle,
}: ProductArticleProps) => {
  return (
    <Stack spacing={2} width={200}>
      <ProductPropertyTitle title="Артикул" />
      {/*Article input*/}
      <Box>
        <FormProductInput
          fullWidth
          index={index}
          name={`article`}
          placeholder="Скопируйте артикул"
          value={productState.article}
          updateState={value => updateArticle(value)}
        />
      </Box>
    </Stack>
  )
}

export default ProductArticle
