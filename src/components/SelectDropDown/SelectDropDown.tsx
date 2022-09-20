import React from "react"
import { MenuItem } from "@mui/material"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { StyledFormControl } from "./SelectDropDownStyled"

const SelectDropDown = ({
  options,
  selected,
  onChange,
}: {
  options: string[]
  selected: string
  onChange: (event: SelectChangeEvent) => void
}) => {
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
