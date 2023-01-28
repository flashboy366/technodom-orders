import { Box, Button, Modal, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import Image from 'mui-image'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'
import { COLORS } from '../constants/materialui'

const HowToButton = () => {
  const [modalOpen, setModalopen] = useState(false)

  const [isDesktopWidth] = useIsMediaWidth(desktopWidthSelector())

  return (
    <>
      <Button
        size="large"
        variant="outlined"
        onClick={() => setModalopen(true)}
        sx={{}}
      >
        Как добавить товар?
      </Button>
      <Modal open={modalOpen} onClose={() => setModalopen(false)}>
        <Box>
          <Paper
            sx={{
              width: isDesktopWidth ? 800 : '90%',
              height: 'fit-content',
              left: '50%',
              top: '50%',
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              padding: 3,
              boxSizing: 'border-box',
            }}
          >
            <Stack spacing={5}>
              <Stack spacing={1}>
                <Typography>
                  1. Откройте сайт поставщика по ссылке в новой вкладке:{' '}
                  <Typography color={COLORS.PRIMARY}>
                    (Только для копирования ссылки, заказ оформляется на
                    странице DostavimKZ.ru!)
                  </Typography>
                </Typography>
                <Image
                  src="technodom_logo.png"
                  width={245}
                  height={60}
                  fit="none"
                  bgColor="white"
                />
              </Stack>
              <Stack spacing={1}>
                <Typography>
                  2. Найдите товар на сайте поставщика и скопируйте его ссылку
                  на наш сайт
                </Typography>
              </Stack>
            </Stack>
            <Box marginTop={4}>
              <Button
                sx={{}}
                variant="text"
                onClick={() => {
                  setModalopen(false)
                }}
              >
                Закрыть
              </Button>
            </Box>
          </Paper>
          <Button
            variant="outlined"
            size="large"
            onClick={() => setModalopen(false)}
            sx={{
              position: 'absolute',
              right: 50,
              top: 30,
            }}
          >
            ╳
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default HowToButton
