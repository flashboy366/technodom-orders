import { Stack, Typography } from '@mui/material'
import TechnodomLink from './brandLinks/TechnodomLink'
import MieleLink from './brandLinks/MieleLink'
import FormWrapper from './FormWrapper'
import useIsMedia from '../hooks/useIsMedia'
import { desktopMediaSelector } from '../util/materialui'

const HeaderForm = () => {
  const [iseDesktopMedia] = useIsMedia(desktopMediaSelector())

  return (
    <FormWrapper title="">
      <Stack
        direction={iseDesktopMedia ? 'row' : 'column'}
        spacing={iseDesktopMedia ? 1 : 5}
        alignItems="center"
        justifyContent="space-around"
      >
        <Stack
          direction={iseDesktopMedia ? 'row' : 'column'}
          alignItems="center"
          spacing={2}
        >
          <Typography>Выберите поставщика:</Typography>
          <TechnodomLink />
          <MieleLink />
        </Stack>
      </Stack>
    </FormWrapper>
  )
}

export default HeaderForm
