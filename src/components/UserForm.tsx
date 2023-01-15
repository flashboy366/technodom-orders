import FormWrapper from './FormWrapper'
import UserInfo from './userForm/UserInfo'
import AddressDelivery from './userForm/AddressDelivery'
import { Dispatch, SetStateAction } from 'react'

interface UserFormProps {
  setDeliveryAddressRequired: Dispatch<SetStateAction<boolean>>
}

const UserForm = ({ setDeliveryAddressRequired }: UserFormProps) => {
  return (
    <FormWrapper title="Ваши данные">
      <UserInfo />
      <AddressDelivery
        setDeliveryAddressRequired={setDeliveryAddressRequired}
      />
    </FormWrapper>
  )
}

export default UserForm
