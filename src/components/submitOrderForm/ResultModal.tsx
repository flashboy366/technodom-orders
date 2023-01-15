import { useState } from 'react'
import { Modal, Paper, Typography } from '@mui/material'

interface ResultModalProps {
  subscribeShowResultModal: (
    showResultModalCallback: (resultModalMsg: string) => void
  ) => void
}

const ResultModal = ({ subscribeShowResultModal }: ResultModalProps) => {
  const [resultModalOpen, setResultModalOpen] = useState(false)
  const [resultModalMsg, setResultModalMsg] = useState('')

  const showResultModal = (resultModalMsg: string): void => {
    setResultModalMsg(resultModalMsg)
    setResultModalOpen(true)
    setTimeout(() => setResultModalOpen(false), 3000)
  }
  subscribeShowResultModal(showResultModal)

  const handleResultModalClose = () => setResultModalOpen(false)

  return (
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
  )
}

export default ResultModal
