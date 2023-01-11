import FormWrapper from './FormWrapper'
import UserInfo from './userForm/UserInfo'
import AddressDelivery from './userForm/AddressDelivery'
import { Divider } from '@mui/material'

const UserForm = () => {
  return (
    <FormWrapper title="Ваши данные">
      <UserInfo />
      <Divider sx={{ margin: 2 }} />
      <AddressDelivery />
    </FormWrapper>
  )
}

export default UserForm
