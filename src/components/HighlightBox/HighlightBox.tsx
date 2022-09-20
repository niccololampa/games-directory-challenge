import React from "react"
import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledHighlightBox = styled(Box)(
  ({ status, colorNeg, colorPos }: { status: boolean; colorNeg: string; colorPos: string }) => ({
    backgroundColor: status ? colorPos : colorNeg,
    borderRadius: "5%",
    height: "30px",
    minWidth: "fit-content",
    padding: "8px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
)

const StyledText = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase",
})

const HighlightBox = ({
  textPos,
  textNeg,
  colorNeg,
  colorPos,
  status,
}: {
  textPos: string
  textNeg: string
  colorNeg: string
  colorPos: string
  status: boolean
}) => {
  return (
    <StyledHighlightBox status={status} colorNeg={colorNeg} colorPos={colorPos}>
      <StyledText>{status ? textPos : textNeg}</StyledText>
    </StyledHighlightBox>
  )
}

export default HighlightBox
