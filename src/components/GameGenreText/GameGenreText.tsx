import React from "react"
import { StyledGenre } from "./GameGenreTextStyled"

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
