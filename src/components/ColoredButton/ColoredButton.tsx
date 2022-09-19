import React, { createElement, useState } from "react"
import { styled } from "@mui/material/styles"
import { Button, Typography } from "@mui/material/"
import { SvgIconComponent } from "@mui/icons-material"

const StyledButton = styled(Button)(
  ({
    width,
    backColor = "#eeeea5",
    backColorHover = "#f7f7d4",
    textColor = "#000000",
    borderColor = "initial",
    borderStyle = "none",
    borderwidth = "initial",
  }: {
    width?: string | number
    textColor: string
    backColor: string
    backColorHover: string
    borderColor?: string
    borderStyle?: string
    borderwidth?: string
  }) => ({
    backgroundColor: backColor,
    "&:hover": {
      backgroundColor: backColorHover,
    },
    color: textColor,
    borderColor: borderColor,
    borderStyle: borderStyle,
    borderWidth: borderwidth,
    textTransform: "capitalize",
    width: width ? width : "100%",
    height: "40px",
    fontWeight: "bold",
    fontSize: "16px",
  }),
)

const StyledButtonText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
})

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
