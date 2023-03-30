import { Button, Link, Paper, Popover, Stack, Typography } from '@mui/material'
import FooterContact from './FooterContact'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'
import { MouseEventHandler, useState } from 'react'

const FooterContacts = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())
  const [anchorEl, setAnchorEl] = useState<
    Element | ((element: Element) => Element) | null | undefined
  >(null)

  const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Stack
      spacing={2}
      width={isDesktopMedia ? 'initial' : '90%'}
      alignItems={isDesktopMedia ? 'flex-end' : 'center'}
    >
      <Popover
        onClose={handleClose}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Paper
          sx={{
            padding: 2,
            gap: 2,
            display: 'flex',
            flexDirection: isDesktopMedia ? 'initial' : 'column',
            width: isDesktopMedia ? 540 : '90%',
          }}
        >
          <Stack flex={1}>
            <FooterContact>
              Компания: Индивидуальный предприниматель Хлыбов Максим Николаевич{' '}
            </FooterContact>
            <FooterContact>ИНН: 744804429144 </FooterContact>
            <FooterContact>Счёт(₽): 40802810601500101862</FooterContact>
            <FooterContact>Банк: ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"</FooterContact>
            <FooterContact>БИК: 044525999</FooterContact>
            <FooterContact>Город: г. Москва </FooterContact>
            <FooterContact>Корр. счёт: 30101810845250000999 </FooterContact>
            <FooterContact>
              Адрес: 454048, г. Челябинск ул 2я Окружная д. 1 офис 3{' '}
            </FooterContact>
            <FooterContact>Тел.: +79227022035</FooterContact>
            <FooterContact>
              E-mail:{' '}
              <Link href={`mailto:dostavim.kz@mail.ru`}>
                dostavim.kz@mail.ru
              </Link>
            </FooterContact>
          </Stack>
        </Paper>
      </Popover>
      <Button sx={{}} onClick={handleClick}>
        <Typography fontWeight={500}>Наши контакты</Typography>
      </Button>
    </Stack>
  )
}

export default FooterContacts
