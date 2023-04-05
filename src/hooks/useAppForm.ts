import {
  deliveryAddressValidationExtension,
  initialSubmitOrderValidationSchema,
} from '../util/zod'
import { useAppDispatch, useAppSelector } from './redux'
import { resetProductsState } from '../redux/reducers/orderProductsReducer'
import { TypeOf } from 'zod'
import { sendEmails } from '../util/email'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ShowResultModal } from '../components/ResultModal'
import { emptyProduct } from '../types/Product'

const useAppForm = () => {
  const [deliveryAddressRequired, setDeliveryAddressRequired] = useState(false)
  const [submitOrderSchema, setSubmitOrderSchema] = useState(
    initialSubmitOrderValidationSchema
  )
  const appState = useAppSelector(state => state)
  const [loadingBackdropShown, setLoadingBackdropShown] = useState(false)
  const [shopIsChosen, setShopIsChosen] = useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (deliveryAddressRequired) {
      setSubmitOrderSchema(
        submitOrderSchema.extend(deliveryAddressValidationExtension)
      )
    } else setSubmitOrderSchema(initialSubmitOrderValidationSchema)
  }, [deliveryAddressRequired])
  type SubmitOrderInput = TypeOf<typeof submitOrderSchema>
  const reactHookFormMethods = useForm<SubmitOrderInput>({
    resolver: zodResolver(submitOrderSchema),
    defaultValues: {
      products: [emptyProduct],
    },
  })
  const { reset: resetForm, handleSubmit } = reactHookFormMethods

  const onSubmitHandler: SubmitHandler<SubmitOrderInput> = async () => {
    setLoadingBackdropShown(true)
    const responseCode = await sendEmails({
      appState,
      deliveryAddressRequired,
    })
    setLoadingBackdropShown(false)
    if (responseCode < 400) {
      showResultModal({
        resultModalMsg: 'Заявка отправлена!',
        timeout: 3000,
      })
      setDeliveryAddressRequired(false)
      resetForm()
      dispatch(resetProductsState())
    } else
      showResultModal({
        resultModalMsg: `Ошибка ${responseCode}`,
        timeout: 3000,
      })
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  let showResultModal: ShowResultModal
  const subscribeShowResultModal = (
    showResultModalCallback: ShowResultModal
  ) => {
    showResultModal = showResultModalCallback
  }

  useEffect(() => {
    reactHookFormMethods.register('orderPrice')
  }, [])
  useEffect(() => {
    reactHookFormMethods.setValue(
      'orderPrice',
      appState.orderProducts.productsPricesSumInRublesWithCharge
    )
  }, [appState.orderProducts.productsPricesSumInRublesWithCharge])

  return {
    onSubmit: handleSubmit(onSubmitHandler),
    reactHookFormMethods,
    deliveryAddressRequired,
    setDeliveryAddressRequired,
    subscribeShowResultModal,
    loadingBackdropShown,
    shopIsChosen,
    setShopIsChosen,
  }
}

export default useAppForm
