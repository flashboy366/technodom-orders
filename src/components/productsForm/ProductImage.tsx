import Image from 'mui-image'
import { Box } from '@mui/material'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'
import Product from '../../types/Product'

interface ProductImageProps {
  product: Product
}

const ProductImage = ({ product }: ProductImageProps) => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Box height={180} alignSelf={'center'} width={'fit-content'}>
      <Image
        width={180}
        src={
          product.productData.productImgUrl
            ? product.productData.productImgUrl
            : 'empty_product.jpg'
        }
      />
    </Box>
  )
}

export default ProductImage
