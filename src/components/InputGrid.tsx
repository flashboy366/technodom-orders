import { Stack } from '@mui/material'
import { ReactNode } from 'react'

interface InputGridProps {
  firstColumn: ReactNode
  secondColumn: ReactNode
}

const InputGrid = ({ firstColumn, secondColumn }: InputGridProps) => {
  return (
    <Stack direction="row" spacing={1} width="100%">
      <Stack spacing={1} width="100%">
        {firstColumn}
      </Stack>
      <Stack spacing={1} width="100%">
        {secondColumn}
      </Stack>
    </Stack>
  )
}

export default InputGrid
