import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import { Button } from "@mui/material/"

const StyledButton = styled(Button)({
  backgroundColor: "#eeeea5",
  "&:hover": {
    backgroundColor: "#f7f7d4",
  },
  color: "black",
  textTransform: "capitalize",
  width: "100%",
  height: "40px",
  fontWeight: "bold",
  fontSize: "16px",
})

const ColoredButton = ({ text, handleClick }: { text: string; handleClick: () => void }) => {
  return (
    <StyledButton variant="contained" onClick={handleClick}>
      {text}
    </StyledButton>
  )
}

export default ColoredButton
