import React from "react"
import { OS } from "../../types"
import { StyledAppleIcon, StyledWindowIcon, StyledGameOSContainer } from "./GameOSInfoStyled"

const GameOSInfo = ({ os, size, color }: { os: OS[]; size: number; color: string }) => {
  return (
    <StyledGameOSContainer sx={{ display: "flex" }} disableGutters>
      {os.includes("mac") && <StyledAppleIcon iconcolor={color} iconsize={size} />}
      {os.includes("windows") && <StyledWindowIcon iconcolor={color} iconsize={size} />}
    </StyledGameOSContainer>
  )
}

export default GameOSInfo
