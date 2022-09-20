import { styled } from "@mui/material/styles"
import { FormControl } from "@mui/material"

// FIXME:  these can be set up in themes page color
const baseColor = "#768085"
const highlightColor = "#eeeea5"

export const StyledFormControl = styled(FormControl)({
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
