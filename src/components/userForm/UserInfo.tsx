import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { mobileWidthSelector } from '../../util/materialui'
import SelectItem from '../../interfaces/SelectItem'
import InputGrid from '../InputGrid'
import LOCATIONS from '../../constants/locations'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  setEmail,
  setLocation,
  setName,
  setPhoneNumber,
} from '../../redux/reducers/userInfoReducer'

const UserInfo = () => {
  const locationsList: SelectItem[] = LOCATIONS.map(location => {
    const selectItem: SelectItem = {
      title: location.title,
      value: location.id.toString(),
    }
    return selectItem
  })

  const [isMobileWidth] = useIsMediaWidth(mobileWidthSelector())
  const dispatch = useAppDispatch()
  const userInfoState = useAppSelector(state => state.userInfo)

  const handleSelectChange = (event: SelectChangeEvent) => {
    dispatch(setLocation({ locationID: parseInt(event.target.value) }))
  }

  const selectItemsList = locationsList.map((item, index) => (
    <MenuItem key={index} value={item.value}>
      {item.title}
    </MenuItem>
  ))

  const firstPropertiesColumn = (
    <>
      <TextField
        placeholder="ФИО"
        value={userInfoState.name}
        onChange={event => dispatch(setName({ name: event.target.value }))}
      />
      <TextField
        placeholder="Номер телефона"
        value={userInfoState.phoneNumber}
        onChange={event =>
          dispatch(setPhoneNumber({ phoneNumber: event.target.value }))
        }
      />
    </>
  )

  const secondPropertiesColumn = (
    <>
      <TextField
        placeholder="Электронная почта"
        value={userInfoState.email}
        onChange={event => dispatch(setEmail({ email: event.target.value }))}
      />
      <FormControl>
        <InputLabel>Населенный пункт</InputLabel>
        <Select
          required
          label="Населенный пункт"
          value={userInfoState.location?.id.toString() || ''}
          onChange={handleSelectChange}
        >
          {selectItemsList}
        </Select>
      </FormControl>
    </>
  )

  return isMobileWidth ? (
    <Stack spacing={1}>
      {firstPropertiesColumn}
      {secondPropertiesColumn}
    </Stack>
  ) : (
    <InputGrid
      firstColumn={firstPropertiesColumn}
      secondColumn={secondPropertiesColumn}
    />
  )
}

export default UserInfo
