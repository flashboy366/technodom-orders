import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material'
import useIsMediaWidth from '../../hooks/useIsMediaWidth'
import { mobileWidthSelector } from '../../util/materialui'
import SelectItem from '../../interfaces/SelectItem'
import InputGrid from '../InputGrid'
import { useState } from 'react'

const UserInfo = () => {
  const locationsList: SelectItem[] = [
    { title: 'Челябинск', value: '0' },
    { title: 'Екатеринбург', value: '1' },
  ]

  const [isMobileWidth] = useIsMediaWidth(mobileWidthSelector())
  const [selectValue, setSelectValue] = useState('')

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value)
  }

  const selectItemsList = locationsList.map((item, index) => (
    <MenuItem key={index} value={item.value}>
      {item.title}
    </MenuItem>
  ))

  const firstPropertiesColumn = (
    <>
      <TextField placeholder="ФИО" />
      <TextField placeholder="Номер телефона" />
    </>
  )
  const secondPropertiesColumn = (
    <>
      <TextField placeholder="Электронная почта" />
      <FormControl>
        <InputLabel>Населенный пункт</InputLabel>
        <Select
          required
          label="Населенный пункт"
          value={selectValue}
          onChange={handleSelectChange}
        >
          {selectItemsList}
        </Select>
      </FormControl>
    </>
  )

  return isMobileWidth ? (
    <Stack spacing={1}>
      {firstPropertiesColumn}
      {secondPropertiesColumn}
    </Stack>
  ) : (
    <InputGrid
      firstColumn={firstPropertiesColumn}
      secondColumn={secondPropertiesColumn}
    />
  )
}

export default UserInfo
