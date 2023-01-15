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
  const locationsList: {
    title: string
    value: string
  }[] = LOCATIONS.map(location => {
    const selectItem: {
      title: string
      value: string
    } = {
      title: location.title,
      value: location.id.toString(),
    }
    return selectItem
  })
  const selectItemsList = locationsList.map((item, index) => (
    <MenuItem key={index} value={item.value}>
      {item.title}
    </MenuItem>
  ))

  const [isMobileWidth] = useIsMediaWidth(mobileWidthSelector())
  const dispatch = useAppDispatch()
  const userInfoState = useAppSelector(state => state.userInfo)

  const handleSelectChange = (event: SelectChangeEvent) => {
    dispatch(setLocation({ locationID: parseInt(event.target.value) }))
  }

  const firstPropertiesColumn = (
    <>
      <TextField
        variant="standard"
        placeholder="ФИО *"
        value={userInfoState.name}
        onChange={event => dispatch(setName({ name: event.target.value }))}
      />
      <TextField
        variant="standard"
        placeholder="Номер телефона *"
        value={userInfoState.phoneNumber}
        onChange={event => {
          if (event.target.value.length > 12) return
          dispatch(setPhoneNumber({ phoneNumber: event.target.value }))
        }}
      />
    </>
  )

  const secondPropertiesColumn = (
    <>
      <TextField
        variant="standard"
        placeholder="Электронная почта *"
        value={userInfoState.email}
        onChange={event => dispatch(setEmail({ email: event.target.value }))}
      />
      <FormControl>
        <InputLabel sx={{ left: '-14px', top: '3px' }}>
          Населенный пункт *
        </InputLabel>
        <Select
          required
          variant="standard"
          label="Населенный пункт *"
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
