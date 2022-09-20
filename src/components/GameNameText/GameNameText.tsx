import React from "react"
import { StyledGameName } from "./GameNameTextStyled"

const GameNameText = ({ gameName }: { gameName: string }) => (
  <StyledGameName>{gameName}</StyledGameName>
)

export default GameNameText
