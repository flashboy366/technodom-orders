import {
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { ChangeEvent, useState } from 'react'
import InputGrid from '../InputGrid'

const AddressDelivery = () => {
  const [formIsShown, setFormIsShown] = useState(false)

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFormIsShown(event.target.checked)

  // улица
  // дом
  // контакт на выгрузке
  // номер телефона
  //
  // комментарий

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
                <TextField placeholder="Улица" />
                <TextField placeholder="Контакт на выгрузке" />
              </>
            }
            secondColumn={
              <>
                <TextField placeholder="Дом" />
                <TextField placeholder="Номер телефона" />
              </>
            }
          />
          <TextField label="Комментарий" multiline />
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
