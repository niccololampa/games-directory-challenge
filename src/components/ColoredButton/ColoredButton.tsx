import React, { createElement, useState } from "react"
import { SvgIconComponent } from "@mui/icons-material"
import { StyledButton, StyledButtonText } from "./ColoredButtonStyles"

const ColoredButton = ({
  text,
  handleClick,
  icon,
  width,
  textColor,
  backColor,
  backColorHover,
  borderColor,
  borderStyle,
  borderwidth,
}: {
  text: string
  handleClick: () => void
  width?: string | number
  textColor: string
  backColor: string
  backColorHover: string
  borderColor?: string
  borderStyle?: string
  borderwidth?: string
  icon?: SvgIconComponent
}) => {
  return (
    <StyledButton
      variant="contained"
      onClick={handleClick}
      width={width}
      textColor={textColor}
      backColor={backColor}
      backColorHover={backColorHover}
      borderColor={borderColor}
      borderStyle={borderStyle}
      borderwidth={borderwidth}
    >
      {icon && createElement(icon)}
      <StyledButtonText>{text}</StyledButtonText>
    </StyledButton>
  )
}

export default ColoredButton
