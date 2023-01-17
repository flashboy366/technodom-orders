import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import Image from 'mui-image'

const ShopSelect = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography>Выберите магазин: </Typography>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Tooltip title={'Technodom.kz'}>
          <FormControlLabel
            checked
            disabled
            value="technodom"
            control={<Radio />}
            label={<Image src="technodom_logo.png" height={25} />}
          />
        </Tooltip>
      </RadioGroup>
    </Stack>
  )
}

export default ShopSelect
