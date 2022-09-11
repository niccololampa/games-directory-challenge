import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import { Button } from "@mui/material/"

const StyledButton = styled(Button)({
  backgroundColor: "#eeeea5",
  color: "black",
  textTransform: "capitalize",
  width: "100%",
  fontWeight: "bold",
})

const ColoredButton = ({ text }: { text: string }) => {
  return <StyledButton variant="contained">{text}</StyledButton>
}

export default ColoredButton
