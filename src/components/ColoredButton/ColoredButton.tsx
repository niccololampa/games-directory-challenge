import React, { createElement, useState } from "react"
import { styled } from "@mui/material/styles"
import { Button, Typography } from "@mui/material/"
import { SvgIconComponent } from "@mui/icons-material"

const StyledButton = styled(Button)(({ width }: { width?: string | number }) => ({
  backgroundColor: "#eeeea5",
  "&:hover": {
    backgroundColor: "#f7f7d4",
  },
  color: "black",
  textTransform: "capitalize",
  width: width ? width : "100%",
  height: "40px",
  fontWeight: "bold",
  fontSize: "16px",
}))

const StyledButtonText = styled(Typography)({
  color: "#000000",
  fontSize: "16px",
  fontWeight: "bold",
})

const ColoredButton = ({
  text,
  handleClick,
  icon,
  width,
}: {
  text: string
  handleClick: () => void
  width?: string | number
  icon?: SvgIconComponent
}) => {
  return (
    <StyledButton variant="contained" onClick={handleClick} width={width}>
      {icon && createElement(icon)}
      <StyledButtonText>{text}</StyledButtonText>
    </StyledButton>
  )
}

export default ColoredButton
