import { Paper } from '@mui/material'
import Product from '../../types/Product'

interface ProductImageProps {
  product: Product
}

const ProductImage = ({ product }: ProductImageProps) => {
  const productImage = product.productData.productImgUrl
    ? product.productData.productImgUrl
    : 'empty_image.png'

  return (
    <Paper
      elevation={0}
      sx={{
        height: 100,
        width: 100,
        backgroundImage: `url(${productImage})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
    // <Box height={180} alignSelf={'center'} width={'fit-content'}>
    //   <Image
    //     width={180}
    //     src={
    //       product.productData.productImgUrl
    //         ? product.productData.productImgUrl
    //         : 'empty_product.jpg'
    //     }
    //   />
    // </Box>
  )
}

export default ProductImage
