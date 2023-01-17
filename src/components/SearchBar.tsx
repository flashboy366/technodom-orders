import { Button, InputAdornment, Paper, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import TECHNODOM from '../constants/technodom'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const openSearchLink = () => {
    if (searchQuery === '') {
      window.open(TECHNODOM.DOMAIN, '_blank')
      return
    }
    window.open(TECHNODOM.SEARCH_URL + searchQuery, '_blank')
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const enterKeyCodeRegExp = new RegExp(/Enter/)
    if (enterKeyCodeRegExp[Symbol.match](event.code)) openSearchLink()
  }

  return (
    <Paper sx={{ padding: 1, paddingX: 2, borderRadius: 30 }}>
      <Stack direction="row">
        <TextField
          variant="standard"
          fullWidth
          placeholder="Найдите товар..."
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onKeyDown={handleKeyDown}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ top: 3, paddingX: 0.5 }}
        ></TextField>
        <Button
          variant="outlined"
          size="medium"
          onClick={openSearchLink}
          sx={{ width: 'fit-content', borderRadius: 30 }}
        >
          Искать
        </Button>
      </Stack>
    </Paper>
  )
}

export default SearchBar
