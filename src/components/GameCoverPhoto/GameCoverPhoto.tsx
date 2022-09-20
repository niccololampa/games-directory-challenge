import React from "react"
import { Container, Box } from "@mui/material"

const GameCoverPhoto = ({
  coverPhoto,
  width,
  height,
}: {
  coverPhoto: string
  width: string | number
  height: string | number
}) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box component="img" alt="coverPhoto" src={coverPhoto} width={width} height={height} />
    </Container>
  )
}

export default GameCoverPhoto
