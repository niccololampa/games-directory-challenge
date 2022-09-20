import * as React from "react"
import SearchIcon from "@mui/icons-material/Search"
import { StyledTextField, StyledInputAdornment } from "./SearchBoxStyled"

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
          <StyledInputAdornment position="start">
            <SearchIcon />
          </StyledInputAdornment>
        ),
      }}
    />
  )
}

export default SearchBox
