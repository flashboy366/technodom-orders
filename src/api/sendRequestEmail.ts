import SERVER from '../constants/server'
import { UserInfoState } from '../redux/reducers/userInfoReducer'
import { OrderProductsState } from '../redux/reducers/orderProductsReducer'
import { AddressDeliveryState } from '../redux/reducers/addressDeliveryReducer'

export const sendRequestEmail = async ([
  userInfoState,
  orderProductsState,
  addressDeliveryState,
]: (
  | UserInfoState
  | OrderProductsState
  | AddressDeliveryState
)[]): Promise<number> => {
  const response = await fetch(
    SERVER.URL +
      'mail_request?' +
      new URLSearchParams({
        userInfo: JSON.stringify(userInfoState),
        orderProducts: JSON.stringify(orderProductsState),
        addressDelivery: JSON.stringify(addressDeliveryState),
      }),
    { method: 'POST' }
  )
  return response.status
}
