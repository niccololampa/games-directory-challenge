import { styled } from "@mui/material/styles"
import { Button, Typography } from "@mui/material/"

export const StyledButton = styled(Button)(
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
    minWidth: "fit-content",
    height: "40px",
    fontWeight: "bold",
    fontSize: "16px",
  }),
)

export const StyledButtonText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
})
