import { Stack } from '@mui/material'
import FormWrapper from './FormWrapper'
import UserProperty from './userForm/UserProperty'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { mobileWidthSelector } from '../util/materialui'

const UserForm = () => {
  const [isMobileWidth] = useIsMediaWidth(mobileWidthSelector())

  const firstPropertiesHalf = (
    <>
      <UserProperty placeholder="ФИО *" />
      <UserProperty placeholder="Номер телефона *" />
    </>
  )
  const secondPropertiesHalf = (
    <>
      <UserProperty placeholder="Электронная почта *" />
      <UserProperty placeholder="Адрес доставки *" />
    </>
  )

  return (
    <FormWrapper title="Ваши данные">
      {isMobileWidth ? (
        <Stack spacing={1}>
          {firstPropertiesHalf}
          {secondPropertiesHalf}
        </Stack>
      ) : (
        <Stack direction="row" spacing={1} width="100%">
          <Stack spacing={1} width="100%">
            {firstPropertiesHalf}
          </Stack>
          <Stack spacing={1} width="100%">
            {secondPropertiesHalf}
          </Stack>
        </Stack>
      )}
    </FormWrapper>
  )
}

export default UserForm
