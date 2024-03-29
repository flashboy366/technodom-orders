import {
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import InputGrid from '../InputGrid'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  setComment,
  setContacts,
  setHouse,
  setPhoneNumber,
  setStreet,
} from '../../redux/reducers/addressDeliveryReducer'
import FormInput from '../react-hook-form/FormInput'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../../util/materialui'

interface AddressDeliveryProps {
  deliveryAddressRequired: boolean
  setDeliveryAddressRequired: Dispatch<SetStateAction<boolean>>
}

const AddressDelivery = ({
  deliveryAddressRequired,
  setDeliveryAddressRequired,
}: AddressDeliveryProps) => {
  const dispatch = useAppDispatch()
  const addressDeliveryState = useAppSelector(state => state.addressDelivery)

  const handleCheckboxClick = () => {
    setDeliveryAddressRequired(!deliveryAddressRequired)
  }

  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  const firstColumn = (
    <>
      <FormInput
        name="addressStreet"
        variant="standard"
        placeholder="Улица *"
        onChange={event => dispatch(setStreet({ street: event.target.value }))}
        value={addressDeliveryState.street}
      />
      <FormInput
        name="addressContacts"
        variant="standard"
        placeholder="Контакт на выгрузке *"
        onChange={event =>
          dispatch(setContacts({ contacts: event.target.value }))
        }
        value={addressDeliveryState.contacts}
      />
    </>
  )

  const secondColumn = (
    <>
      <FormInput
        name="addressHouse"
        variant="standard"
        placeholder="Дом *"
        onChange={event => dispatch(setHouse({ house: event.target.value }))}
        value={addressDeliveryState.house}
      />
      <FormInput
        name="addressPhone"
        variant="standard"
        placeholder="Номер телефона *"
        onChange={event => {
          if (event.target.value.length > 12) return
          dispatch(setPhoneNumber({ phoneNumber: event.target.value }))
        }}
        value={addressDeliveryState.phoneNumber}
      />
    </>
  )
  return (
    <Stack spacing={2}>
      <FormControlLabel
        control={
          <Checkbox
            onClick={handleCheckboxClick}
            value={deliveryAddressRequired}
          />
        }
        label="Необходима доставка до адреса"
      />
      {deliveryAddressRequired ? (
        <>
          {isDesktopMedia ? (
            <InputGrid firstColumn={firstColumn} secondColumn={secondColumn} />
          ) : (
            <>
              {' '}
              {firstColumn} {secondColumn}{' '}
            </>
          )}

          <TextField
            variant="standard"
            label="Комментарий"
            multiline
            onChange={event =>
              dispatch(setComment({ comment: event.target.value }))
            }
            value={addressDeliveryState.comment}
          />
          <Typography variant="caption" width={isDesktopMedia ? '70%' : '100%'}>
            Уважаемые клиенты, доставка груза осуществляется компанией-партнером
            только до адреса! Услуги по осмотру, разгрузке, подъёму товара и
            подключению не оказываются!
          </Typography>
        </>
      ) : null}
    </Stack>
  )
}

export default AddressDelivery
