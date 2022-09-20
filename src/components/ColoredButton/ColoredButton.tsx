import React, { createElement } from "react"
import { SvgIconComponent } from "@mui/icons-material"
import { StyledButton, StyledButtonText } from "./ColoredButtonStyled"

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
      textcolor={textColor}
      backcolor={backColor}
      backcolorhover={backColorHover}
      bordercolor={borderColor}
      borderstyle={borderStyle}
      borderwidth={borderwidth}
    >
      {icon && createElement(icon)}
      <StyledButtonText>{text}</StyledButtonText>
    </StyledButton>
  )
}

export default ColoredButton
