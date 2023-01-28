import { TextField, TextFieldProps } from '@mui/material'
import { ChangeEvent, FC } from 'react'
import { Controller } from 'react-hook-form'
import { useFieldArrayFormContext } from './FieldArrayFormProvider'

type FormInputProps = {
  index: number
  name: string
  registerOnChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  registerOnBlur: (event: ChangeEvent<HTMLTextAreaElement>) => void
} & TextFieldProps

const FormProductInput: FC<FormInputProps> = ({
  index,
  name,
  registerOnChange,
  registerOnBlur,
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFieldArrayFormContext()

  const productInputName = `products[${index}][${name}]`
  let errorMsg: string | undefined
  if (errors.products) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (errors.products[index]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (errors.products[index][name]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        errorMsg = errors.products[index][name]['message']
      }
    }
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
          required
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          helperText={errorMsg ? errorMsg : ' '}
          value={otherProps.value}
          {...control.register(productInputName, {
            onChange: registerOnChange,
            onBlur: registerOnBlur,
          })}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            ...otherProps.inputProps,
          }}
        />
      )}
    />
  )
}

export default FormProductInput
