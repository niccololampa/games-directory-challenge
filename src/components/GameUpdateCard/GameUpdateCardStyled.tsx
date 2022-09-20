import { styled } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"

export const StyledUpdateBox = styled(Box)(() => ({
  backgroundColor: "#3f3f3f",
  borderRadius: "5%",
  border: "5px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "200px",
  minWidth: "100px",
  height: "380px",
  padding: 30,
}))

export const StyledImageBox = styled(Box)(() => ({
  width: "100%",
  height: "200px",
}))

export const StyledDateText = styled(Box)(() => ({
  marginTop: "20px",
  color: "#eeeea5",
  fontSize: "12px",
  textTransform: "uppercase",
  fontWeight: "bold",
}))

export const StyledTitleText = styled(Box)(() => ({
  color: "#fff",
  marginTop: "5px",
  fontSize: "20px",
  fontWeight: "bold",
}))

export const StyledSummaryBox = styled(Box)(() => ({
  maxWidth: "100%",
  marginTop: "10px",
  fontSize: "15px",
  height: "150px",
  overflow: "hidden",
}))

export const StyledSummaryText = styled(Typography)(() => ({
  maxWidth: "100%",
  wordWrap: "break-word",
  color: "#fff",
}))
