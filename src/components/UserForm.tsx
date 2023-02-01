import FormWrapper from './FormWrapper'
import UserInfo from './userForm/UserInfo'
import AddressDelivery from './userForm/AddressDelivery'
import { Dispatch, SetStateAction } from 'react'

interface UserFormProps {
  deliveryAddressRequired: boolean
  setDeliveryAddressRequired: Dispatch<SetStateAction<boolean>>
}

const UserForm = ({
  deliveryAddressRequired,
  setDeliveryAddressRequired,
}: UserFormProps) => {
  return (
    <FormWrapper title="Ваши данные">
      <UserInfo />
      <AddressDelivery
        deliveryAddressRequired={deliveryAddressRequired}
        setDeliveryAddressRequired={setDeliveryAddressRequired}
      />
    </FormWrapper>
  )
}

export default UserForm
