import React from "react"
import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledHighlightBox = styled(Box)(({ status }: { status: boolean }) => ({
  backgroundColor: status ? "#eed4a5" : "#6b6b6b",
  borderRadius: "5%",
  height: "30px",
  minWidth: "130px",
  padding: "8px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}))

const StyledText = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase",
})

const HighlightBox = ({
  textPos,
  textNeg,
  status,
}: {
  textPos: string
  textNeg: string
  status: boolean
}) => {
  return (
    <StyledHighlightBox status={status}>
      <StyledText>{status ? textPos : textNeg}</StyledText>
    </StyledHighlightBox>
  )
}

export default HighlightBox
