import { Box, Button, Modal, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import Image from 'mui-image'
import TechnodomLink from './TechnodomLink'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'

const HowToButton = () => {
  const [modalOpen, setModalopen] = useState(false)

  const [isDesktopWidth] = useIsMediaWidth(desktopWidthSelector())

  return (
    <>
      <Button
        variant="text"
        sx={{ height: 'fit-content', alignSelf: 'center' }}
        onClick={() => setModalopen(true)}
      >
        Как оформить заказ?
      </Button>
      <Modal open={modalOpen} onClose={() => setModalopen(false)} sx={{}}>
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
                <Typography>1. Пройдите по ссылке на сайт магазина.</Typography>
                <Box width={200}>
                  <TechnodomLink />
                </Box>
              </Stack>
              <Stack spacing={1}>
                <Typography>
                  2. Выберите товар, скопируйте его артикул и введите артикул в
                  поле товара на нашем сайте.
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
                  расчет стоимости товара и сервисных услуг в рублях.
                </Typography>
                <Image
                  src={'how_to_4.png'}
                  width={isDesktopWidth ? 400 : '100%'}
                />
              </Stack>
              <Stack spacing={1}>
                <Typography>
                  4. Введите Ваши данные и услуги доставки до адреса при
                  необходимости.
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
              </Stack>
              <Stack paddingTop={2} paddingBottom={8}>
                <Typography>
                  После чего с Вами свяжется менеджер, согласует заказ, сроки и
                  стоимость доставки до адреса.
                </Typography>
              </Stack>
            </Stack>
            <Button
              variant="text"
              sx={{}}
              onClick={() => {
                setModalopen(false)
              }}
            >
              Закрыть
            </Button>
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
