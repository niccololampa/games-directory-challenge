import React, { useState } from "react"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

const SelectDropDown = ({ category }: { category: string }) => {
  const [itemSelected, setItemSelected] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setItemSelected(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="select-label"
          id="select-helper"
          value={itemSelected}
          label={category}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">None</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectDropDown
