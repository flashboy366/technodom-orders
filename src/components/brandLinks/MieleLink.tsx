import { Box, Button, Popover, Typography } from '@mui/material'
import Image from 'mui-image'
import { useState } from 'react'

const MieleLink = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Box>
      <Button onClick={handleClick} variant="outlined" sx={{ padding: 1 }}>
        <Image src={'miele_logo.png'} height={60} width={200} fit="none" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography padding={1}>
          В настоящее время сервис заказа с Miele недоступен, но скоро будет!
        </Typography>
      </Popover>
    </Box>
  )
}

export default MieleLink
