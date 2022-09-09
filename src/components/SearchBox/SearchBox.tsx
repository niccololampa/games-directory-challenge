import * as React from "react"
import SearchIcon from "@mui/icons-material/Search"
import { styled } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

// FIXME:  these can be set up in themes page color
const baseColor = "#768085"
const highlightColor = "#eeeea5"

const StyledTextField = styled(TextField)({
  minWidth: 400,
  "& .MuiInputBase-root": { color: baseColor },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: baseColor },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: highlightColor,
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: highlightColor,
  },
})

const SearchBox = ({
  value,
  onChange,
}: {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <StyledTextField
      id="outlined-basic"
      variant="outlined"
      onChange={onChange}
      value={value}
      placeholder="Search for a Game..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ color: baseColor }}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBox
