import { Button, Link } from '@mui/material'
import Image from 'mui-image'

const TechnodomLink = () => {
  return (
    <Button variant="outlined" sx={{ padding: 1 }}>
      <Link href="https://www.technodom.kz" target="_blank">
        <Image
          src="technodom_logo.png"
          width={245}
          height={60}
          fit="none"
          bgColor="white"
        />
      </Link>
    </Button>
  )
}

export default TechnodomLink
