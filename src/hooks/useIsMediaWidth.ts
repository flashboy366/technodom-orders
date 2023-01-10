import { useMediaQuery } from '@mui/material'

const useIsMediaWidth = (selector: string) => {
  const isMediaWidth = useMediaQuery(selector)
  return [isMediaWidth]
}

export default useIsMediaWidth
