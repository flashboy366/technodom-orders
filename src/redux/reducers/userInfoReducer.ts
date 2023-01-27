import Location from '../../types/Location'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import LOCATIONS from '../../constants/locations'

export interface UserInfoState {
  name: string
  phoneNumber: string
  email: string
  location: Location | undefined
}

const initialState: UserInfoState = {
  name: '',
  phoneNumber: '',
  email: '',
  location: undefined,
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name
    },
    setPhoneNumber: (state, action: PayloadAction<{ phoneNumber: string }>) => {
      state.phoneNumber = action.payload.phoneNumber
    },
    setEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email
    },
    setLocation: (
      state,
      action: PayloadAction<{ locationID: number | undefined }>
    ) => {
      state.location = LOCATIONS.find(
        location => location.id === action.payload.locationID
      )
    },
  },
})

export const { setName, setLocation, setPhoneNumber, setEmail } =
  userInfoSlice.actions

export default userInfoSlice.reducer
