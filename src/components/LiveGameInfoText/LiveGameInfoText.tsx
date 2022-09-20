import React from "react"
import { StyledLive } from "./LiveGameInfoTextStyled"

const LiveGameInfoText = ({ live }: { live: boolean }) => {
  return <StyledLive live={live ? true : false}>{live ? "Live" : "Upcoming"}</StyledLive>
}

export default LiveGameInfoText
