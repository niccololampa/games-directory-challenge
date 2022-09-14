import React from "react"
import ReactPlayer from "react-player"
import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

const StyledTrailerBox = styled(Box)({
  backgroundColor: "#3f3f3f",
  marginTop: "20px",
  borderRadius: "2%",
  width: "100%",
  height: "600px",
})

const GameTrailerPlayer = ({ url }: { url: string }) => {
  return (
    <StyledTrailerBox>
      <ReactPlayer url={url} width="100%" height="100%" />
    </StyledTrailerBox>
  )
}

export default GameTrailerPlayer
