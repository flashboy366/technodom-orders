import { Box, Button, Modal, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import Image from 'mui-image'
import TechnodomLink from './brandLinks/TechnodomLink'
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
        sx={{ fontSize: 'large' }}
      >
        Как оформить заказ?
      </Button>
      <Modal open={modalOpen} onClose={() => setModalopen(false)}>
        <Box>
          <Paper
            sx={{
              width: isDesktopWidth ? 800 : '90%',
              height: 600,
              left: '50%',
              top: '50%',
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              overflowY: 'scroll',
              padding: 3,
              boxSizing: 'border-box',
            }}
          >
            <Stack spacing={5}>
              <Stack spacing={1}>
                <Typography>
                  1. Откройте сайт поставщика по ссылке в новой вкладке:{' '}
                  <Typography color={COLORS.PRIMARY}>
                    (Только для копирования артикула, заказ оформляется на
                    странице DostavimKZ.ru!)
                  </Typography>
                </Typography>
                <Box width={200}>
                  <TechnodomLink />
                </Box>
              </Stack>
              <Stack spacing={1}>
                <Typography>
                  2. Найдите товар на сайте поставщика и скопируйте его артикул
                  в поле товара на нашем сайте:
                </Typography>
                <Image
                  src={'how_to_2.png'}
                  width={isDesktopWidth ? 400 : '100%'}
                />
                <Image
                  src={'how_to_3.png'}
                  width={isDesktopWidth ? 400 : '100%'}
                />
              </Stack>
              <Stack spacing={1}>
                <Typography>
                  3. Определите количество товара, автоматически произойдет
                  расчет стоимости товара и сервисных услуг в рублях:
                </Typography>
                <Image
                  src={'how_to_4.png'}
                  width={isDesktopWidth ? 400 : '100%'}
                />
              </Stack>
              <Stack spacing={1}>
                <Typography>
                  4. Введите Ваши данные и услуги доставки до адреса при
                  необходимости:
                </Typography>
                <Image
                  src={'how_to_5.png'}
                  width={isDesktopWidth ? 400 : '100%'}
                />
              </Stack>
              <Stack spacing={1}>
                <Typography>
                  5. Ознакомьтесь с условиями оферты и оформляйте заказ.
                </Typography>
                <Typography>
                  После чего с Вами свяжется менеджер, согласует заказ, сроки и
                  стоимость доставки до адреса.
                </Typography>
              </Stack>
            </Stack>
            <Box paddingTop={4}>
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
