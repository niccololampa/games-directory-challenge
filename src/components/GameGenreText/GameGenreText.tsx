import React from "react"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

const StyledGenre = styled(Typography)(({ fontWeight }: { fontWeight: string | number }) => ({
  fontFamily: "Keania One",
  color: "#eeeea5",
  fontSize: 14,
  marginLeft: 2,
  fontWeight,
}))

const GameGenreText = ({
  genre,
  fontWeight = "normal",
}: {
  genre: string
  fontWeight?: string | number
}) => {
  return <StyledGenre fontWeight={fontWeight}>{genre}</StyledGenre>
}

export default GameGenreText
