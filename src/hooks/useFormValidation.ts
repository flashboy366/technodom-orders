import { useAppSelector } from './redux'
import validateProduct from '../util/product'

const useFormValidation = () => {
  const appState = useAppSelector(state => state)

  const userInfo = appState.userInfo
  const addressDelivery = appState.addressDelivery
  const orderProducts = appState.orderProducts

  const validateUserForm = () =>
    userInfo.name !== '' &&
    userInfo.phoneNumber !== '' &&
    userInfo.email !== '' &&
    userInfo.location !== undefined

  const validateAddressDeliveryForm = (deliveryAddressRequired: boolean) =>
    !deliveryAddressRequired ||
    (addressDelivery.street !== '' &&
      addressDelivery.house !== '' &&
      addressDelivery.contacts !== '' &&
      addressDelivery.phoneNumber !== '')

  const validateOrderProducts = () => {
    if (orderProducts.products.length !== 0) {
      let productsValid = true
      orderProducts.products.map(product => {
        if (!validateProduct(product)) productsValid = false
      })
      return productsValid
    }
    return false
  }
  return {
    validateUserForm: validateUserForm,
    validateAddressDeliveryForm: validateAddressDeliveryForm,
    validateOrderProducts: validateOrderProducts,
  }
}

export default useFormValidation
