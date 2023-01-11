import {
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { ChangeEvent, useState } from 'react'
import InputGrid from '../InputGrid'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  setComment,
  setContacts,
  setHouse,
  setPhoneNumber,
  setStreet,
} from '../../redux/reducers/addressDeliveryReducer'

const AddressDelivery = () => {
  const [formIsShown, setFormIsShown] = useState(false)
  const dispatch = useAppDispatch()
  const addressDeliveryState = useAppSelector(state => state.addressDelivery)

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFormIsShown(event.target.checked)

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
                <TextField
                  placeholder="Улица"
                  onChange={event =>
                    dispatch(setStreet({ street: event.target.value }))
                  }
                  value={addressDeliveryState.street}
                />
                <TextField
                  placeholder="Контакт на выгрузке"
                  onChange={event =>
                    dispatch(setContacts({ contacts: event.target.value }))
                  }
                  value={addressDeliveryState.contacts}
                />
              </>
            }
            secondColumn={
              <>
                <TextField
                  placeholder="Дом"
                  onChange={event =>
                    dispatch(setHouse({ house: event.target.value }))
                  }
                  value={addressDeliveryState.house}
                />
                <TextField
                  placeholder="Номер телефона"
                  onChange={event =>
                    dispatch(
                      setPhoneNumber({ phoneNumber: event.target.value })
                    )
                  }
                  value={addressDeliveryState.phoneNumber}
                />
              </>
            }
          />
          <TextField
            label="Комментарий"
            multiline
            onChange={event =>
              dispatch(setComment({ comment: event.target.value }))
            }
            value={addressDeliveryState.comment}
          />
          <Typography variant="caption">
            Уважаемые клиенты, доставка груза осуществляется компанией партнером
            только до адреса! Услуги по осмотру, разгрузке, подьёму товара и
            подключению не оказываются!
          </Typography>
        </>
      ) : null}
    </Stack>
  )
}

export default AddressDelivery
