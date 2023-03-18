import { Link, Stack, Typography } from '@mui/material'
import { COLORS } from '../../constants/materialui'
import FINANCIAL from '../../constants/financial'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'
import Product from '../../types/Product'

interface ProductNameAndPriceProps {
  product: Product
}

const ProductNameAndPrice = ({ product }: ProductNameAndPriceProps) => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Stack>
      <Link href={product.productURL} variant="body1">
        {product.productData.productTitle}
      </Link>
      {product.productData.productTitle !== '' ? (
        <Typography
          color={
            product.productData.productPriceInRubles
              ? COLORS.ACCENT_PRIMARY
              : COLORS.ERROR_RED
          }
          marginBottom={1}
        >
          {product.productData.productPriceInRubles
            ? `${Math.trunc(
                product.productData.productPriceInRubles *
                  product.quantity *
                  FINANCIAL.EXTRA_CHARGE_COEFFICIENT
              )} р.`
            : 'Нет в наличии'}
        </Typography>
      ) : null}
    </Stack>
  )
}

export default ProductNameAndPrice
