import React from "react"
import { MenuItem, FormControl } from "@mui/material"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { styled } from "@mui/material/styles"

const SelectDropDown = ({
  options,
  selected,
  onChange,
}: {
  options: string[]
  selected: string
  onChange: (event: SelectChangeEvent) => void
}) => {
  // FIXME:  these can be set up in themes page color
  const baseColor = "#768085"
  const highlightColor = "#eeeea5"

  const StyledFormControl = styled(FormControl)({
    minWidth: 300,
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
      <StyledFormControl>
        <Select id="select-dropdown" value={selected} onChange={onChange}>
          <MenuItem value={""}>None</MenuItem>
          {options.map((option, index) => (
            <MenuItem value={option} key={index}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    </div>
  )
}

export default SelectDropDown
