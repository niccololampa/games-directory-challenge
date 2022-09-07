import React, { useState } from "react"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import { styled } from "@mui/material/styles"
import Select, { SelectChangeEvent } from "@mui/material/Select"

const SelectDropDown = ({ category }: { category: string }) => {
  const [itemSelected, setItemSelected] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setItemSelected(event.target.value)
  }

  // FIXME:  these can be set up in themes page color
  const baseColor = "#768085"
  const highlightColor = "#eeeea5"

  const StyledFormControl = styled(FormControl)({
    m: 1,
    minWidth: 120,
    "& .MuiInputBase-root": { color: baseColor },
    "& .MuiSvgIcon-root": { color: baseColor },
    "& .MuiOutlinedInput-notchedOutline": { borderColor: baseColor },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: highlightColor,
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: highlightColor,
    },
  })

  return (
    <div>
      <StyledFormControl sx={{ m: 1, minWidth: 120 }}>
        <Select id="select-helper" value={itemSelected} onChange={handleChange} displayEmpty>
          <MenuItem value="">None</MenuItem>
        </Select>
      </StyledFormControl>
    </div>
  )
}

export default SelectDropDown
