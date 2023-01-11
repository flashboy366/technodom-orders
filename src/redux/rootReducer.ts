import { combineReducers } from '@reduxjs/toolkit'
import userInfoReducer from './reducers/userInfoReducer'
import addressDeliveryReducer from './reducers/addressDeliveryReducer'
import orderProductsReducer from './reducers/orderProductsReducer'

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  addressDelivery: addressDeliveryReducer,
  orderProducts: orderProductsReducer,
})

export default rootReducer
