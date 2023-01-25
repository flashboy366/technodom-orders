import { SyntheticEvent, useState } from 'react'
import { Alert, Box, Snackbar } from '@mui/material'

interface ResultSnackProps {
  subscribeShowResultSnack: (
    showResultSnackCallback: (snackMessage: string) => void
  ) => void
}

const ResultSnack = ({ subscribeShowResultSnack }: ResultSnackProps) => {
  const [resultSnackOpen, setResultSnackOpen] = useState(false)
  const [resultSnackMessage, setResultSnackMessage] = useState('')
  const showResultSnack = (snackMessage: string) => {
    setResultSnackMessage(snackMessage)
    setResultSnackOpen(true)
  }
  subscribeShowResultSnack(showResultSnack)

  const handleResultSnackClose = (
    event?: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setResultSnackOpen(false)
  }

  return (
    <Box>
      <Snackbar
        open={resultSnackOpen}
        autoHideDuration={6000}
        onClose={handleResultSnackClose}
      >
        <Alert
          onClose={handleResultSnackClose}
          severity="error"
          sx={{ width: '100%' }}
        >
          {resultSnackMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default ResultSnack
