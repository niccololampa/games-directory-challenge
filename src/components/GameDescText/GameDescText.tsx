import React from "react"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

const StyledGameDescText = styled(Typography)(() => ({
  maxWidth: "100%",
  wordWrap: "break-word",
  color: "#fff",
}))

const GameDescText = ({ description, fontSize }: { description: string; fontSize: string }) => (
  <StyledGameDescText fontSize={fontSize}>{description}</StyledGameDescText>
)

export default GameDescText
