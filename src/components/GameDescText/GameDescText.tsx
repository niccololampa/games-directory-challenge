import React from "react"
import { StyledGameDescText } from "./GameDescTextStyles"

const GameDescText = ({ description, fontSize }: { description: string; fontSize: string }) => (
  <StyledGameDescText fontSize={fontSize}>{description}</StyledGameDescText>
)

export default GameDescText
