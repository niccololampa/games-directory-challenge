import { styled } from "@mui/material/styles"
import { TextField, InputAdornment } from "@mui/material"

// FIXME:  these can be set up in themes page color
const baseColor = "#768085"
const highlightColor = "#eeeea5"

export const StyledTextField = styled(TextField)({
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

export const StyledInputAdornment = styled(InputAdornment)({ color: baseColor })
