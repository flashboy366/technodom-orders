import { Stack } from '@mui/material'
import FormWrapper from './FormWrapper'
import HowToButton from './HowToButton'

const ShopsForm = () => {
  return (
    <FormWrapper title="">
      <Stack spacing={3} alignItems="center" justifyContent="space-around">
        <HowToButton />
      </Stack>
    </FormWrapper>
  )
}

export default ShopsForm
