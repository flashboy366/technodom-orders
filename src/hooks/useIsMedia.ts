import { useMediaQuery } from '@mui/material'

const useIsMedia = (selector: string) => {
  const isMediaWidth = useMediaQuery(selector)
  return [isMediaWidth]
}

export default useIsMedia
