import {
  Box,
  Button,
  Link,
  Modal,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'
import { COLORS } from '../constants/materialui'

const HowToButton = () => {
  const [modalOpen, setModalopen] = useState(false)

  const [isDesktopWidth] = useIsMediaWidth(desktopWidthSelector())

  return (
    <>
      <Button variant="outlined" onClick={() => setModalopen(true)} sx={{}}>
        Как сделать заказ?
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
            <Stack spacing={3}>
              <Stack>
                <Typography>
                  1. Выберите необходимые товары на сайте{' '}
                  <Link href="https://kz.iherb.com" target="_blank">
                    kz.iherb.com
                  </Link>{' '}
                  и копируйте ссылки в Заказ на нашем сервисе{' '}
                  <Typography color={COLORS.PRIMARY} display="inline">
                    (автоматически будет рассчитана стоимость товара с доставкой
                    до склада в г. Челябинск)
                  </Typography>
                </Typography>
                <Typography variant="caption">
                  <Typography color={COLORS.PRIMARY} display="inline">
                    *{' '}
                  </Typography>
                  Для выбора товаров на сайте iHerb необходимо зайти на него с
                  помощью VPN(например:{' '}
                  <Link href="https://rus.windscribe.com" target="_blank">
                    Windscribe
                  </Link>
                  ) и выбрать страну Казахстан в правом верхнем углу сайта
                </Typography>
              </Stack>
              <Typography>
                2. Заполните Ваши данные и выберите город доставки, остается
                нажать кнопку «оформить заказ»
              </Typography>
              <Typography>
                3. Для подтверждения Заказа и выставления счета Вам позвонит
                менеджер с тел:{' '}
                <Typography color={COLORS.PRIMARY} display="inline">
                  +7 922-702-20-35
                </Typography>
              </Typography>
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
