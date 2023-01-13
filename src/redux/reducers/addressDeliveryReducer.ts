import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AddressDeliveryState {
  street: string
  house: string
  contacts: string
  phoneNumber: string
  comment: string
}

const initialState: AddressDeliveryState = {
  street: '',
  house: '',
  contacts: '',
  phoneNumber: '',
  comment: '',
}

export const addressDeliverySlice = createSlice({
  name: 'addressDelivery',
  initialState,
  reducers: {
    setStreet: (state, action: PayloadAction<{ street: string }>) => {
      state.street = action.payload.street
    },
    setHouse: (state, action: PayloadAction<{ house: string }>) => {
      state.house = action.payload.house
    },
    setContacts: (state, action: PayloadAction<{ contacts: string }>) => {
      state.contacts = action.payload.contacts
    },
    setPhoneNumber: (state, action: PayloadAction<{ phoneNumber: string }>) => {
      state.phoneNumber = action.payload.phoneNumber
    },
    setComment: (state, action: PayloadAction<{ comment: string }>) => {
      state.comment = action.payload.comment
    },
  },
})

export const { setStreet, setHouse, setComment, setContacts, setPhoneNumber } =
  addressDeliverySlice.actions

export default addressDeliverySlice.reducer
