import React from "react"
import { StyledHighlightBox, StyledText } from "./HighlightBoxStyled"

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
    <StyledHighlightBox status={status} colorneg={colorNeg} colorpos={colorPos}>
      <StyledText>{status ? textPos : textNeg}</StyledText>
    </StyledHighlightBox>
  )
}

export default HighlightBox
