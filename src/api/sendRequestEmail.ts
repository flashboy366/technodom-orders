import SERVER from '../constants/server'
import { UserInfoState } from '../redux/reducers/userInfoReducer'
import { OrderProductsState } from '../redux/reducers/orderProductsReducer'
import { AddressDeliveryState } from '../redux/reducers/addressDeliveryReducer'

const sendRequestEmail = async ([
  userInfoState,
  orderProductsState,
  addressDeliveryState,
]: (
  | UserInfoState
  | OrderProductsState
  | AddressDeliveryState
)[]): Promise<string> => {
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
  if (response.status === 200) {
    return 'Заявка успешно отправлена!'
  } else return 'Ошибка'
}

export default sendRequestEmail
