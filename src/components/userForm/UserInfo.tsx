import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Stack,
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
import FormInput from '../react-hook-form/FormInput'
import FormSelect from '../react-hook-form/FormSelect'

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
      <FormInput
        variant="standard"
        placeholder="ФИО *"
        value={userInfoState.name}
        onChange={event => dispatch(setName({ name: event.target.value }))}
        name="name"
      />
      <FormInput
        variant="standard"
        placeholder="Номер телефона *"
        value={userInfoState.phoneNumber}
        name="phone"
        onChange={event => {
          if (event.target.value.length > 12) return
          dispatch(setPhoneNumber({ phoneNumber: event.target.value }))
        }}
      />
    </>
  )

  const secondPropertiesColumn = (
    <>
      <FormInput
        variant="standard"
        placeholder="Электронная почта *"
        value={userInfoState.email}
        onChange={event => dispatch(setEmail({ email: event.target.value }))}
        name="email"
      />
      <FormControl sx={{ top: -9 }}>
        <InputLabel>Населенный пункт *</InputLabel>
        <FormSelect
          helperText="help"
          name="location"
          variant="outlined"
          label="Населенный пункт *"
          placeholder="Населенный пункт *"
          value={userInfoState.location?.id.toString() || ''}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onChange={handleSelectChange}
        >
          {selectItemsList}
        </FormSelect>
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
