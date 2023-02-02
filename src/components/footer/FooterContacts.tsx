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
      width={isDesktopMedia ? 540 : '90%'}
      alignItems={isDesktopMedia ? 'flex-end' : 'center'}
    >
      <Popover
        onClose={handleClose}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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
          <Stack flex={1} spacing={1}>
            <FooterContact>ТОО «ВМ Логистика» </FooterContact>
            <FooterContact>БИН 220640012971 </FooterContact>
            <FooterContact>
              Место нахождения: Республика Казахстан, 111000, г.Костанай, пр-кт
              Аль-Фараби 123 кв 50{' '}
            </FooterContact>
            <FooterContact>
              Почтовый адрес: Республика Казахстан, 110000,{' '}
            </FooterContact>
            <FooterContact>
              г. Костанай, пр. Аль-Фараби 123, кв 50{' '}
            </FooterContact>
            <FooterContact>ИИК KZ2496513F0008337276 </FooterContact>
            <FooterContact>в "АО «ForteBank»" </FooterContact>
            <FooterContact>БИК IRTYKZKA </FooterContact>
            <FooterContact>Тел.: +79227022035</FooterContact>
            <FooterContact>
              E-mail:{' '}
              <Link href={`mailto:dostavim.kz@mail.ru`}>
                dostavim.kz@mail.ru
              </Link>
            </FooterContact>
          </Stack>
          <Stack flex={1} spacing={1}>
            <FooterContact>«ВМ Логистика» ЖШС </FooterContact>
            <FooterContact>БСН 220640012971 </FooterContact>
            <FooterContact>
              Орналасқан жері: Қазақстан Республикасы, 110000, Қостанай қ.,
              Әл-Фараби даңғ., 123, 50{' '}
            </FooterContact>
            <FooterContact>
              Пошталық мекен-жайы: Қазақстан Республикасы, 110000, Қостанай қ.,
              Әл-Фараби даңғ., 123, 50{' '}
            </FooterContact>
            <FooterContact>ИИК KZ2496513F0008337276 </FooterContact>
            <FooterContact>" в "АО «ForteBank»" </FooterContact>
            <FooterContact>БИК IRTYKZKA </FooterContact>
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
