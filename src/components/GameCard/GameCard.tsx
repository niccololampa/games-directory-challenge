import React, { useState } from "react"
import Color from "color"
import { Container, Typography, CardActionArea, Card, CardContent, CardMedia } from "@mui/material"
import { styled } from "@mui/material/styles"
import GameModal from "../../components/GameModal/GameModal"
import type { GameInfo } from "../../types"

const StyledCardActionArea = styled(CardActionArea)(({ width }: { width?: string | number }) => ({
  margin: 10,
  borderRadius: 0,
  borderTop: "solid",
  borderBottom: "solid",
  borderRight: "solid",
  borderWidth: 2,

  borderImage:
    "linear-gradient( 135deg, transparent, #eed5a5, #eed5a538, transparent, #eed5a5, #eed5a538   )",

  borderImageSlice: 50,
  transition: "0.2s",
  width,
  "&:hover": {
    transform: "scale(1.1)",
  },
}))

const StyledCard = styled(Card)(({ color }: { color: string }) => ({
  borderRadius: 0,
  boxShadow: "none",
  "&:hover": {
    boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
  },
}))

const StyledCardContent = styled(CardContent)(({ color }: { color: string }) => ({
  backgroundColor: color,
  padding: "1rem 1.5rem 1.5rem",
}))

const StyledCardMedia = styled(CardMedia)(
  ({ bgColor = "rgba(0, 0, 0, 0.08)" }: { bgColor?: string }) => ({
    width: "100%",
    height: 0,
    paddingBottom: "75%",
    backgroundColor: bgColor,
  }),
)

const StyledGameName = styled(Typography)({
  fontFamily: "Keania One",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#fff",
})

const StyledGenre = styled(Typography)({
  fontFamily: "Montserrat",
  color: "#eeeea5",
  fontWeight: 500,
  fontSize: 14,
  marginLeft: 2,
})

const StyledDescription = styled(Typography)({
  fontFamily: "Montserrat",
  color: "#fff",
  opacity: 0.87,
  marginTop: "2rem",
  fontWeight: 500,
  fontSize: 14,
})

const StyledLive = styled(Typography)(({ live }: { live: boolean }) => {
  return {
    fontFamily: "Keania One",
    color: live ? "#57d63d" : "#768085",
    fontWeight: "bold",
    fontSize: 14,
  }
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
  const { gameName, image, live, description, genres } = gameInfo
  const [modalVisible, setModalVisible] = useState(false)

  const handleCardClick = () => {
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  return (
    <>
      <StyledCardActionArea width={width} onClick={handleCardClick}>
        <StyledCard color={color}>
          <StyledCardMedia image={image} />
          <StyledCardContent color={color}>
            <StyledLive live={live}>{live ? "Live" : "Upcoming"}</StyledLive>
            <StyledGameName>{gameName}</StyledGameName>
            <Container sx={{ display: "flex" }} disableGutters>
              {genres.map((genre, index) => {
                return (
                  <StyledGenre key={index}>
                    {genre + (index !== genre.length - 1 ? ", " : "")}
                  </StyledGenre>
                )
              })}
            </Container>
          </StyledCardContent>
        </StyledCard>
      </StyledCardActionArea>

      <GameModal visible={modalVisible} handleClose={handleModalClose} />
    </>
  )
}

export default GameCard
