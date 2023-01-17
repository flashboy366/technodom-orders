import {
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
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

interface AddressDeliveryProps {
  setDeliveryAddressRequired: Dispatch<SetStateAction<boolean>>
}

const AddressDelivery = ({
  setDeliveryAddressRequired,
}: AddressDeliveryProps) => {
  const [formIsShown, setFormIsShown] = useState(false)
  const dispatch = useAppDispatch()
  const addressDeliveryState = useAppSelector(state => state.addressDelivery)

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCheckboxValue = event.target.checked
    setFormIsShown(newCheckboxValue)
    setDeliveryAddressRequired(newCheckboxValue)
  }

  return (
    <Stack spacing={1}>
      <FormControlLabel
        control={<Checkbox onChange={handleCheckboxChange} />}
        label="Необходима доставка до адреса"
      />
      {formIsShown ? (
        <>
          <InputGrid
            firstColumn={
              <>
                <FormInput
                  name="addressStreet"
                  variant="standard"
                  placeholder="Улица *"
                  onChange={event =>
                    dispatch(setStreet({ street: event.target.value }))
                  }
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
            }
            secondColumn={
              <>
                <FormInput
                  name="addressHouse"
                  variant="standard"
                  placeholder="Дом *"
                  onChange={event =>
                    dispatch(setHouse({ house: event.target.value }))
                  }
                  value={addressDeliveryState.house}
                />
                <FormInput
                  name="addressPhone"
                  variant="standard"
                  placeholder="Номер телефона *"
                  onChange={event => {
                    if (event.target.value.length > 12) return
                    dispatch(
                      setPhoneNumber({ phoneNumber: event.target.value })
                    )
                  }}
                  value={addressDeliveryState.phoneNumber}
                />
              </>
            }
          />
          <TextField
            variant="standard"
            label="Комментарий"
            multiline
            onChange={event =>
              dispatch(setComment({ comment: event.target.value }))
            }
            value={addressDeliveryState.comment}
          />
          <Typography variant="caption" width="70%">
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
