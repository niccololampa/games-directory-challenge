import { Container } from "@mui/material"
import { styled } from "@mui/material/styles"
import AppleIcon from "@mui/icons-material/Apple"
import WindowIcon from "@mui/icons-material/Window"

export const StyledAppleIcon = styled(AppleIcon)(
  ({ iconcolor, iconsize }: { iconcolor: string; iconsize: number }) => ({
    fontSize: iconsize,
    color: iconcolor,
  }),
)

export const StyledWindowIcon = styled(WindowIcon)(
  ({ iconcolor, iconsize }: { iconcolor: string; iconsize: number }) => ({
    fontSize: iconsize,
    color: iconcolor,
  }),
)

export const StyledGameOSContainer = styled(Container)({
  display: "flex",
  justifyContent: "flex-end",
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1,
  margin: "3px",
})
