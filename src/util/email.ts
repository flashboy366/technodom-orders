import { UserInfoState } from '../redux/reducers/userInfoReducer'
import { OrderProductsState } from '../redux/reducers/orderProductsReducer'
import { AddressDeliveryState } from '../redux/reducers/addressDeliveryReducer'
import sendRequestEmail from '../api/sendRequestEmail'
import { CombinedState } from '@reduxjs/toolkit'

export const sendEmail = async ({
  appState,
  deliveryAddressRequired,
}: {
  appState: CombinedState<{
    userInfo: UserInfoState
    addressDelivery: AddressDeliveryState
    orderProducts: OrderProductsState
  }>
  deliveryAddressRequired: boolean
}) => {
  const requestParams: (
    | UserInfoState
    | OrderProductsState
    | AddressDeliveryState
  )[] = [appState.userInfo, appState.orderProducts]
  if (deliveryAddressRequired) requestParams.push(appState.addressDelivery)

  return await sendRequestEmail(requestParams)
}
