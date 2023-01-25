import { Stack, Typography } from '@mui/material'
import TechnodomLink from './brandLinks/TechnodomLink'
import MieleLink from './brandLinks/MieleLink'
import FormWrapper from './FormWrapper'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'

const ShopsForm = () => {
  const [iseDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

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

export default ShopsForm
