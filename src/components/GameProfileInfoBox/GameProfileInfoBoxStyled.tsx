import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledBox = styled(Box)({
  backgroundColor: "#282828",
  borderRadius: "4%",
  width: "200px",
  height: "30px",
  padding: "20px",
})

export const StyledLabel = styled(Typography)({
  color: "#7f7f7f",
  fontSize: "10px",
  textTransform: "uppercase",
})

export const StyledValue = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase",
})
