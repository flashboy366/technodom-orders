import { Card, CardContent, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface FormWrapperProps {
  children: ReactNode | ReactNode[]
  title: string
  additionalHeaderElement?: ReactNode
}

const FormWrapper = ({
  children,
  title,
  additionalHeaderElement,
}: FormWrapperProps) => {
  return (
    <Card sx={{ width: '100%' }}>
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
