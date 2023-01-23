import { Box, Stack } from '@mui/material'
import Image from 'mui-image'
import useIsMedia from '../hooks/useIsMedia'
import { desktopMediaSelector } from '../util/materialui'

const HowToSection = () => {
  const [isDesktopMedia] = useIsMedia(desktopMediaSelector())

  const howToPart = (src: string) => (
    <Box borderRadius={5} overflow="hidden">
      <Image src={src} />
    </Box>
  )

  return (
    <Stack spacing={3} direction={isDesktopMedia ? 'row' : 'column'}>
      {howToPart('how_to_section_part_1.png')}
      {howToPart('how_to_section_part_2.png')}
    </Stack>
  )
}

export default HowToSection
