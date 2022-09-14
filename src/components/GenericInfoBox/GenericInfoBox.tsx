import React from "react"
import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledGenericBox = styled(Box)(() => ({
  backgroundColor: "#282828",
  borderRadius: "5%",
  height: "30px",
  minWidth: "130px",
  padding: "8px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}))

const StyledInfo = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase",
})

const GenericInfoBox = ({ text }: { text: string }) => {}

export default GenericInfoBox
