import React from "react"
import { Container, Box } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledContainer = styled(Container)({
  // position: "absolute",
})

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
    <StyledContainer maxWidth={false} disableGutters>
      <Box component="img" alt="coverPhoto" src={coverPhoto} width={width} height={height} />
    </StyledContainer>
  )
}

export default GameCoverPhoto
