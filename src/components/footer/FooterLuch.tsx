import { Link, Stack, Typography } from '@mui/material'
import Image from 'mui-image'

const FooterLuch = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Link href="https://тк-луч.рф/" height={50}>
        <Image src="luch_logo.jpg" fit="contain" />
      </Link>
      <Typography variant="caption" width={200}>
        География доставки гарантирована сервисом нашего партнера ТК "ЛУЧ"
      </Typography>
    </Stack>
  )
}

export default FooterLuch
