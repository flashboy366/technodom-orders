import { TextField, TextFieldProps } from '@mui/material'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { useFieldArrayFormContext } from './FieldArrayFormProvider'

type FormInputProps = {
  index: number
  name: string
  updateState: (value: number | undefined) => void
} & TextFieldProps

const FormProductInput: FC<FormInputProps> = ({
  index,
  name,
  updateState,
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFieldArrayFormContext()

  const productInputName = `products[${index}][${name}]`
  let errorMsg: string | undefined
  if (errors.products)
    if (errors.products[index])
      if (errors.products[index][name]) {
        errorMsg = errors.products[index][name]['message']
      }

  return (
    <Controller
      control={control}
      name={productInputName}
      defaultValue={undefined}
      render={({ field }) => (
        <TextField
          {...otherProps}
          {...field}
          error={!!errorMsg}
          sx={{ width: '100%' }}
          required
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          helperText={errorMsg ? errorMsg : ' '}
          value={otherProps.value}
          {...control.register(productInputName, {
            onChange: event => {
              const value = event.target.value.replace(/\D+/, '')
              console.log(name, value)
              updateState(value)
            },
          })}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />
      )}
    />
  )
}

export default FormProductInput
