import React, { useState } from "react"
import Color from "color"
import {
  Container,
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import {
  GameModal,
  LiveGameInfoText,
  GameGenreText,
  GameNameText,
  GameOSInfo,
  NFTSDisplay,
} from "../../components"
import type { GameInfo } from "../../types"

const StyledCardActionArea = styled(CardActionArea)(({ width }: { width?: string | number }) => ({
  margin: 10,
  borderRadius: 0,
  borderTop: "solid",
  borderBottom: "solid",
  borderRight: "solid",
  borderWidth: 2,

  borderImage:
    "linear-gradient( 135deg, transparent, #eed5a5, transparent, transparent, #eed5a5, transparent)",

  borderImageSlice: 50,
  transition: "0.2s",
  width,
  "&:hover": {
    transform: "scale(1.1)",
    outline: "none",
    boxShadow: "0 0 20px  #eed5a5",
  },
}))

const StyledCard = styled(Card)(({ color }: { color: string }) => ({
  borderRadius: 0,
  boxShadow: "none",
  "&:hover": {
    // boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
  },
}))

const StyledCardContent = styled(CardContent)(({ color }: { color: string }) => ({
  backgroundColor: color,
  padding: "1rem 1.5rem 1.5rem",
}))

const StyledOSMediaBox = styled(Box)({
  position: "relative",
  height: "190px",
})

const StyledCardMedia = styled(CardMedia)(
  ({ bgColor = "rgba(0, 0, 0, 0.08)" }: { bgColor?: string }) => ({
    width: "100%",
    paddingBottom: "75%",
    backgroundColor: bgColor,
    position: "absolute",
    top: 0,
    left: 0,
  }),
)

const StyledDescription = styled(Typography)({
  fontFamily: "Montserrat",
  color: "#fff",
  opacity: 0.87,
  marginTop: "2rem",
  fontWeight: 500,
  fontSize: 14,
})

const GameCard = ({
  color,
  width,
  gameInfo,
}: {
  color: string
  gameInfo: GameInfo
  width?: number | string
}) => {
  const { gameName, image, live, shortDesc, genres, os, nfts } = gameInfo
  const [modalVisible, setModalVisible] = useState(false)

  const handleCardClick = () => {
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  // (index !== genre.length - 1 ? ", " : "")}

  return (
    <>
      <StyledCardActionArea width={width} onClick={handleCardClick}>
        <StyledCard color={color}>
          <StyledOSMediaBox>
            <GameOSInfo os={os} size={20} color="#fff" />
            {nfts && <NFTSDisplay />}
            <StyledCardMedia image={image} />
          </StyledOSMediaBox>
          <StyledCardContent color={color}>
            <LiveGameInfoText live={live} />
            <GameNameText gameName={gameName} />
            <Container sx={{ display: "flex" }} disableGutters>
              {genres.map((genre, index) => (
                <GameGenreText key={index} genre={genre} />
              ))}
            </Container>
          </StyledCardContent>
        </StyledCard>
      </StyledCardActionArea>

      <GameModal visible={modalVisible} gameInfo={gameInfo} handleClose={handleModalClose} />
    </>
  )
}

export default GameCard
