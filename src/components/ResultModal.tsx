import { ReactNode, useState } from 'react'
import { Box, Modal, Paper, Stack, Typography } from '@mui/material'
import useIsMediaWidth from '../hooks/useIsMediaWidth'
import { desktopWidthSelector } from '../util/materialui'

export type ShowResultModal = ({
  resultModalMsg,
  interactiveElement,
  timeout,
  reload,
}: {
  resultModalMsg: string
  interactiveElement?: ReactNode
  timeout?: number
  reload?: boolean
}) => void

interface ResultModalProps {
  subscribeShowResultModal: (showResultModalCallback: ShowResultModal) => void
}

const ResultModal = ({ subscribeShowResultModal }: ResultModalProps) => {
  const [resultModalMsg, setResultModalMsg] = useState('')
  const [resultModalInteraction, setResultModalInteraction] =
    useState<ReactNode>()
  const [resultModalOpen, setResultModalOpen] = useState(false)

  const showResultModal: ShowResultModal = ({
    resultModalMsg,
    interactiveElement,
    timeout,
    reload = false,
  }) => {
    setResultModalMsg(resultModalMsg)
    interactiveElement ? setResultModalInteraction(interactiveElement) : null
    setResultModalOpen(true)
    let handleClose: () => void
    reload ? (handleClose = window.location.reload.bind(window.location)) : null
    timeout
      ? setTimeout(() => {
          setResultModalOpen(false)
          handleClose()
        }, timeout)
      : null
  }
  subscribeShowResultModal(showResultModal)

  const [isDesktopMedia] = useIsMediaWidth(desktopWidthSelector())

  return (
    <Box>
      <Modal
        open={resultModalOpen}
        onClose={() => setResultModalOpen(false)}
        sx={{ height: 500, alignContent: 'center' }}
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: isDesktopMedia ? '50%' : '40%',
            transform: isDesktopMedia
              ? 'translate(-50%, -50%)'
              : 'translate(-35%, -50%)',
            padding: 3,
          }}
        >
          <Stack spacing={2}>
            <Typography>{resultModalMsg}</Typography>
            {resultModalInteraction}
          </Stack>
        </Paper>
      </Modal>
    </Box>
  )
}

export default ResultModal
