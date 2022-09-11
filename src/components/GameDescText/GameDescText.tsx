import React from "react"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

const StyledGameDescText = styled(Typography)({
  fontSize: "12px",
  color: "#fff",
})

const GameDescText = ({ description }: { description: string }) => (
  <StyledGameDescText>{description}</StyledGameDescText>
)

export default GameDescText
