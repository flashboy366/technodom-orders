import { Autocomplete, Box, Stack, TextField } from '@mui/material'
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
import { useFormContext } from 'react-hook-form'
import { SyntheticEvent, useEffect } from 'react'

const UserInfo = () => {
  const [isMobileWidth] = useIsMediaWidth(mobileWidthSelector())
  const dispatch = useAppDispatch()
  const userInfoState = useAppSelector(state => state.userInfo)

  const handleSelectChange = (event: SyntheticEvent<Element, Event>) => {
    const newLocationLabel = event.currentTarget.innerHTML
    const newLocation = LOCATIONS.find(
      location => location.label === newLocationLabel
    )
    dispatch(setLocation({ locationID: newLocation?.id }))
  }

  const firstPropertiesColumn = (
    <>
      <FormInput
        variant="standard"
        placeholder="ФИО"
        value={userInfoState.name}
        onChange={event => dispatch(setName({ name: event.target.value }))}
        name="name"
      />
      <FormInput
        variant="standard"
        placeholder="Номер телефона"
        value={userInfoState.phoneNumber}
        name="phone"
        onChange={event => {
          if (event.target.value.length > 12) return
          dispatch(setPhoneNumber({ phoneNumber: event.target.value }))
        }}
      />
    </>
  )

  const {
    setValue,
    control,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    control.register('location')
  }, [])
  useEffect(() => {
    setValue('location', userInfoState.location?.label)
  }, [userInfoState.location?.label])

  const secondPropertiesColumn = (
    <>
      <FormInput
        variant="standard"
        placeholder="Электронная почта"
        value={userInfoState.email}
        onChange={event => dispatch(setEmail({ email: event.target.value }))}
        name="email"
      />
      <Box sx={{ height: 63 }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={LOCATIONS}
          value={userInfoState.location ?? null}
          onChange={handleSelectChange}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // onBlur={handleBlur}
          renderInput={params => (
            <TextField
              {...params}
              label="Населённый пункт"
              error={!!errors['location']}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              helperText={errors['location'] ? errors['location'].message : ''}
            />
          )}
        />
      </Box>
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
