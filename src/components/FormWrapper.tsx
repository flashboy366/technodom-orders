import { Card, CardContent, CardProps, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface FormWrapperProps extends CardProps {
  children: ReactNode | ReactNode[]
  title: string
  additionalHeaderElement?: ReactNode
}

const FormWrapper = ({
  children,
  title,
  additionalHeaderElement,
  ...otherProps
}: FormWrapperProps) => {
  return (
    <Card {...otherProps} elevation={0}>
      <CardContent>
        <Stack
          marginBottom={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">{title}</Typography>
          {additionalHeaderElement}
        </Stack>
        {children}
      </CardContent>
    </Card>
  )
}

export default FormWrapper
