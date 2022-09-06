import * as React from "react"
import SearchIcon from "@mui/icons-material/Search"
import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

const SearchBox = () => {
  return (
    <TextField
      id="outlined-basic"
      // label="Search"
      variant="outlined"
      placeholder="Search for a Game..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBox
