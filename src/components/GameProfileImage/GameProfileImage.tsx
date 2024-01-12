import React from "react"
import { Box } from "@mui/material"

const GameProfileImage = ({
  image,
  width,
  height,
}: {
  image: string
  width: string | number
  height: string | number
}) => {
  return <Box component="img" alt="coverPhoto" src={image} width={width} height={height} />
}

export default GameProfileImage
