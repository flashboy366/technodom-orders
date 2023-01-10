import { TextField } from '@mui/material'

interface UserPropertyProps {
  placeholder: string
}

const UserProperty = ({ placeholder }: UserPropertyProps) => (
  <TextField sx={{ width: 'auto' }} placeholder={placeholder} />
)

export default UserProperty
