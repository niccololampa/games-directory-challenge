import React from "react"
import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledLive = styled(Typography)(({ live }: { live: boolean }) => {
  return {
    fontFamily: "Keania One",
    color: live ? "#57d63d" : "#768085",
    fontWeight: "bold",
    fontSize: 14,
  }
})

const LiveGameInfoText = ({ live }: { live: boolean }) => {
  return <StyledLive live={live}>{live ? "Live" : "Upcoming"}</StyledLive>
}

export default LiveGameInfoText
