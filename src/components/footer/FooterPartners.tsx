import { Box, Stack, Typography } from '@mui/material'
import Image from 'mui-image'

const FooterPartners = () => {
  return (
    <Stack direction="row" spacing={2} alignSelf="center">
      <Box height={100}>
        <Image src="лого_луч_2.svg" />
      </Box>
      <Typography variant="body1" width={200}>
        География доставки гарантирована сервисом нашего партнера ТК "ЛУЧ"
      </Typography>
    </Stack>
  )
}

export default FooterPartners
