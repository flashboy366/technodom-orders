import { any, array, literal, number, object, string } from 'zod'

const productValidationSchema = object({
  article: any().refine(val => val !== '', { message: 'Обязательное поле' }),
  quantity: any()
    .refine(val => val !== '', {
      message: 'Обязательное поле',
    })
    .refine(val => parseInt(val) > 0, { message: 'Некорректное количество' })
    .refine(
      val => {
        const quantityRegExp = new RegExp(/^0+\d*/)
        return !quantityRegExp.test(val)
      },
      { message: 'Некорректное количество' }
    ),
})

export const initialSubmitOrderValidationSchema = object({
  name: string().nonempty('Обязательное поле'),
  email: string()
    .nonempty('Обязательноe поле')
    .email({ message: 'Некорректный адрес' }),
  phone: string()
    .nonempty('Обязательноe поле')
    .refine(
      val => {
        const phoneRegExp1 = new RegExp(/\+7\d{10}/)
        const phoneRegExp2 = new RegExp(/8\d{10}/)
        return phoneRegExp1.test(val) || phoneRegExp2.test(val)
      },
      { message: 'Некорректный номер телефона' }
    ),
  location: any().refine(val => val !== undefined, {
    message: 'Обязательное поле',
  }),
  products: array(productValidationSchema),
  agreement: literal(true, {
    errorMap: () => ({ message: 'Примите условия соглашения' }),
  }),
  orderPrice: number().refine(val => val > 5000),
})
