import { initialSubmitOrderValidationSchema } from '../util/zod'
import { useAppDispatch, useAppSelector } from './redux'
import { resetProductsState } from '../redux/reducers/orderProductsReducer'
import { string, TypeOf } from 'zod'
import { sendEmails } from '../util/email'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

const useAppForm = () => {
  const [deliveryAddressRequired, setDeliveryAddressRequired] = useState(false)
  const [submitOrderSchema, setSubmitOrderSchema] = useState(
    initialSubmitOrderValidationSchema
  )
  const appState = useAppSelector(state => state)
  const [loadingBackdropShown, setLoadingBackdropShown] = useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (deliveryAddressRequired) {
      setSubmitOrderSchema(
        submitOrderSchema.extend({
          addressStreet: string().nonempty('Обязательное поле'),
          addressContacts: string().nonempty('Обязательное поле'),
          addressHouse: string().nonempty('Обязательное поле'),
          addressPhone: string()
            .nonempty('Обязательноe поле')
            .refine(
              val => {
                const phoneRegExp1 = new RegExp(/\+7\d{10}/)
                const phoneRegExp2 = new RegExp(/8\d{10}/)
                return phoneRegExp1.test(val) || phoneRegExp2.test(val)
              },
              { message: 'Некорректный номер телефона' }
            ),
        })
      )
    } else setSubmitOrderSchema(initialSubmitOrderValidationSchema)
  }, [deliveryAddressRequired])
  type SubmitOrderInput = TypeOf<typeof submitOrderSchema>
  const reactHookFormMethods = useForm<SubmitOrderInput>({
    resolver: zodResolver(submitOrderSchema),
    defaultValues: {
      products: appState.orderProducts.products,
    },
  })
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = reactHookFormMethods
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])
  const onSubmitHandler: SubmitHandler<SubmitOrderInput> = () => {
    sendRequestEmail()
  }

  const sendRequestEmail = async () => {
    setLoadingBackdropShown(true)
    const responseCode = await sendEmails({
      appState,
      deliveryAddressRequired,
    })
    setLoadingBackdropShown(false)
    if (responseCode < 400) {
      showResultModal('Заявка отправлена!')
      dispatch(resetProductsState())
    } else showResultModal(`Ошибка ${responseCode}`)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  let showResultModal: (resultModalMsg: string) => void
  const subscribeShowResultModal = (
    showResultModalCallback: (resultModalMsg: string) => void
  ) => {
    showResultModal = showResultModalCallback
  }

  useEffect(() => {
    reactHookFormMethods.register('orderPrice')
  }, [])
  useEffect(() => {
    reactHookFormMethods.setValue(
      'orderPrice',
      appState.orderProducts.totalPriceInRubles
    )
  }, [appState.orderProducts.totalPriceInRubles])

  return {
    onSubmit: handleSubmit(onSubmitHandler),
    reactHookFormMethods,
    setDeliveryAddressRequired,
    subscribeShowResultModal,
    loadingBackdropShown,
  }
}

export default useAppForm
