import React from "react"
import { Container } from "@mui/material"
import { styled } from "@mui/material/styles"
import AppleIcon from "@mui/icons-material/Apple"
import WindowIcon from "@mui/icons-material/Window"
import { OS } from "../../types"

const StyledAppleIcon = styled(AppleIcon)(
  ({ iconColor, iconSize }: { iconColor: string; iconSize: number }) => ({
    fontSize: iconSize,
    color: iconColor,
  }),
)

const StyledWindowIcon = styled(WindowIcon)(
  ({ iconColor, iconSize }: { iconColor: string; iconSize: number }) => ({
    fontSize: iconSize,
    color: iconColor,
  }),
)

const StyledGameOSContainer = styled(Container)({
  display: "flex",
  justifyContent: "flex-end",
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 10000,
})

const GameOSInfo = ({ os, size, color }: { os: OS[]; size: number; color: string }) => {
  return (
    <StyledGameOSContainer sx={{ display: "flex" }} disableGutters>
      {os.includes("mac") && <StyledAppleIcon iconColor={color} iconSize={size} />}
      {os.includes("windows") && <StyledWindowIcon iconColor={color} iconSize={size} />}
    </StyledGameOSContainer>
  )
}

export default GameOSInfo
