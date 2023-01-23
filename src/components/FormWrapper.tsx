import { Card, CardContent, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface FormWrapperProps {
  children: ReactNode | ReactNode[]
  title: string
}

const FormWrapper = ({ children, title }: FormWrapperProps) => {
  return (
    <>
      <CardContent>
        <Typography marginBottom={2} variant="h6">
          {title}
        </Typography>
        {children}
      </CardContent>
    </>
  )
}

export default FormWrapper
