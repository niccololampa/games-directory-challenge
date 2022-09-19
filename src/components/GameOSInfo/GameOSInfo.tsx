import React from "react"
import { Container } from "@mui/material"
import { styled } from "@mui/material/styles"
import AppleIcon from "@mui/icons-material/Apple"
import WindowIcon from "@mui/icons-material/Window"
import { OS } from "../../types"

const StyledAppleIcon = styled(AppleIcon)(
  ({ iconcolor, iconsize }: { iconcolor: string; iconsize: number }) => ({
    fontSize: iconsize,
    color: iconcolor,
  }),
)

const StyledWindowIcon = styled(WindowIcon)(
  ({ iconcolor, iconsize }: { iconcolor: string; iconsize: number }) => ({
    fontSize: iconsize,
    color: iconcolor,
  }),
)

const StyledGameOSContainer = styled(Container)({
  display: "flex",
  justifyContent: "flex-end",
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1,
  margin: "3px",
})

const GameOSInfo = ({ os, size, color }: { os: OS[]; size: number; color: string }) => {
  return (
    <StyledGameOSContainer sx={{ display: "flex" }} disableGutters>
      {os.includes("mac") && <StyledAppleIcon iconcolor={color} iconsize={size} />}
      {os.includes("windows") && <StyledWindowIcon iconcolor={color} iconsize={size} />}
    </StyledGameOSContainer>
  )
}

export default GameOSInfo
