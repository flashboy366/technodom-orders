import { Stack } from '@mui/material'
import { ReactNode } from 'react'

interface InputGridProps {
  firstColumn: ReactNode
  secondColumn: ReactNode
}

const InputGrid = ({ firstColumn, secondColumn }: InputGridProps) => {
  return (
    <Stack direction="row" spacing={3} marginBottom={2}>
      <Stack spacing={2} width="100%" justifyContent="space-between">
        {firstColumn}
      </Stack>
      <Stack spacing={2} width="100%" justifyContent="space-between">
        {secondColumn}
      </Stack>
    </Stack>
  )
}

export default InputGrid
