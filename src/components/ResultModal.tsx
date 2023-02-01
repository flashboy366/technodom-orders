import { useState } from 'react'
import { Box, Modal, Paper, Typography } from '@mui/material'

interface ResultModalProps {
  subscribeShowResultModal: (
    showResultModalCallback: (resultModalMsg: string) => void
  ) => void
}

const ResultModal = ({ subscribeShowResultModal }: ResultModalProps) => {
  const [resultModalOpen, setResultModalOpen] = useState(false)
  const [resultModalMsg, setResultModalMsg] = useState('')

  const onModalClose = () => {
    setResultModalOpen(false)
    window.location.reload()
  }

  const showResultModal = (resultModalMsg: string): void => {
    setResultModalMsg(resultModalMsg)
    setResultModalOpen(true)
    setTimeout(onModalClose, 3000)
  }
  subscribeShowResultModal(showResultModal)

  const handleResultModalClose = () => onModalClose

  return (
    <Box>
      <Modal
        open={resultModalOpen}
        onClose={handleResultModalClose}
        sx={{ height: 500, alignContent: 'center' }}
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 5,
          }}
        >
          <Typography>{resultModalMsg}</Typography>
        </Paper>
      </Modal>
    </Box>
  )
}

export default ResultModal
