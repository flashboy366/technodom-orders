import { Select, TextFieldProps } from '@mui/material'
import { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

type FormInputProps = {
  name: string
} & TextFieldProps

const FormSelect: FC<FormInputProps> = ({ name, ...otherProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <Select
          {...otherProps}
          {...field}
          error={!!errors[name]}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          helperText={errors[name] ? errors[name].message : ''}
          {...control.register(name, { onChange: otherProps.onChange })}
        />
      )}
    />
  )
}

export default FormSelect
