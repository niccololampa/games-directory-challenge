import React from "react"
import ReactPlayer from "react-player"
import { StyledTrailerBox } from "./GameTrailerPlayerStyled"

const GameTrailerPlayer = ({ url }: { url: string }) => {
  return (
    <StyledTrailerBox>
      <ReactPlayer url={url} width="100%" height="100%" />
    </StyledTrailerBox>
  )
}

export default GameTrailerPlayer
