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
import { keyframes } from "@mui/system"

import {
  GameModal,
  LiveGameInfoText,
  GameGenreText,
  GameNameText,
  GameOSInfo,
  NFTSDisplay,
} from "../../components"
import type { GameInfo } from "../../types"

const popOutandIn = keyframes`
0% {
    transform: scale(1.0)
},
10% {
    transform: scale(1.04)
},
20% {
    transform: scale(1.08)
},
30% {
    transform: scale(1.12)
},
40% {
    transform: scale(1.16)
},
50% {
    transform: scale(1.2)
},
60% {
    transform: scale(1.18)
},
70% {
    transform: scale(1.16)
},
80% {
    transform: scale(1.14)
},
90% {
    transform: scale(1.12)
},
100% {
    transform: scale(1.1)
    margin: "0px 100px"
}
`

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
    animation: `${popOutandIn} 0.4s ease`,
    outline: "none",
    boxShadow: "0 0 30px  #a4d3f1",
  },
}))

const StyledCard = styled(Card)(
  ({ color, colorHover }: { color: string; colorHover?: string }) => ({
    borderRadius: 0,
    boxShadow: "none",
    "&:hover": {
      // boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
    },
  }),
)

const StyledCardContent = styled(CardContent)(({ color = "#2e4857" }: { color?: string }) => ({
  backgroundColor: color,
  height: "100px",
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

const StyledDescBox = styled(Box)({ height: "80%", overflow: "hidden" })

const StyledDescription = styled(Typography)({
  fontFamily: "Montserrat",
  color: "#fff",
  opacity: 0.87,
  fontWeight: 500,
  fontSize: 14,
})

const GameCard = ({
  color,
  colorHoverContent,
  width,
  gameInfo,
}: {
  color: string
  colorHoverContent?: string
  gameInfo: GameInfo
  width?: number | string
}) => {
  const { gameName, image, live, shortDesc, genres, os, nfts } = gameInfo
  const [modalVisible, setModalVisible] = useState(false)
  const [cardHovered, setCardHovered] = useState(true)

  const handleCardClick = () => {
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  // (index !== genre.length - 1 ? ", " : "")}

  return (
    <>
      <StyledCardActionArea
        width={width}
        onClick={handleCardClick}
        onMouseOver={() => setCardHovered(true)}
        onMouseOut={() => setCardHovered(false)}
      >
        <StyledCard color={color}>
          <StyledOSMediaBox>
            <GameOSInfo os={os} size={20} color="#fff" />
            {nfts && <NFTSDisplay />}
            <StyledCardMedia image={image} />
          </StyledOSMediaBox>
          <StyledCardContent color={!cardHovered ? color : colorHoverContent}>
            {!cardHovered && <LiveGameInfoText live={live} />}
            <GameNameText gameName={gameName} />
            {!cardHovered && (
              <Container sx={{ display: "flex" }} disableGutters>
                {genres.map((genre, index) => (
                  <GameGenreText key={index} genre={genre} />
                ))}
              </Container>
            )}

            {cardHovered && (
              <StyledDescBox>
                <StyledDescription>{shortDesc}</StyledDescription>
              </StyledDescBox>
            )}
          </StyledCardContent>
        </StyledCard>
      </StyledCardActionArea>

      <GameModal visible={modalVisible} gameInfo={gameInfo} handleClose={handleModalClose} />
    </>
  )
}

export default GameCard
