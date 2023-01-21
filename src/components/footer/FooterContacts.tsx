import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Collapse,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import FooterContact from './FooterContact'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'
import { ExpandMore } from '@mui/icons-material'
import { useState } from 'react'

const FooterContacts = () => {
  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Collapse
      in={isDesktopMedia ? collapsed : false}
      collapsedSize={390}
      orientation="horizontal"
      timeout={500}
    >
      <Stack margin={2} spacing={2}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            onClick={() => setCollapsed(!collapsed)}
          >
            <Typography variant="h6" fontWeight={500}>
              Наши контакты
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={4}>
              <Stack flex={1}>
                <FooterContact>ТОО «ВМ Логистика» </FooterContact>
                <FooterContact>БИН 220640012971 </FooterContact>
                <FooterContact>
                  Место нахождения: Республика Казахстан, 111000, г.Костанай,
                  пр-кт Аль-Фараби 123 кв 50{' '}
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
              <Stack flex={1}>
                <FooterContact>«ВМ Логистика» ЖШС </FooterContact>
                <FooterContact>БСН 220640012971 </FooterContact>
                <FooterContact>
                  Орналасқан жері: Қазақстан Республикасы, 110000, Қостанай қ.,
                  Әл-Фараби даңғ., 123, 50{' '}
                </FooterContact>
                <FooterContact>
                  Пошталық мекен-жайы: Қазақстан Республикасы, 110000, Қостанай
                  қ., Әл-Фараби даңғ., 123, 50{' '}
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
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Collapse>
  )
}

export default FooterContacts
