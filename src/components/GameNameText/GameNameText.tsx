import React from "react"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

const StyledGameName = styled(Typography)({
  fontFamily: "Keania One",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#fff",
})

const GameNameText = ({ gameName }: { gameName: string }) => (
  <StyledGameName>{gameName}</StyledGameName>
)

export default GameNameText
