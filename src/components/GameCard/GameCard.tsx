import React, { useState, useEffect } from "react"
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
  LiveGameInfoText,
  GameGenreText,
  GameNameText,
  GameOSInfo,
  NFTSDisplay,
} from "../../components"
import type { GameInfo } from "../../types"
import { moveRight, moveLeft, popOutandIn } from "./GameCardAnimation"

const StyledCardActionArea = styled(CardActionArea)(
  ({
    width,
    animation,
    margin,
    transition,
  }: {
    width?: string | number
    animation?: string
    transition?: string
    margin: string
  }) => {
    return {
      margin,
      borderRadius: 0,
      borderTop: "solid",
      borderBottom: "solid",
      borderRight: "solid",
      borderWidth: 2,
      animation,
      borderImage:
        "linear-gradient( 135deg, transparent, #eed5a5, transparent, transparent, #eed5a5, transparent)",

      borderImageSlice: 50,
      transition: transition,
      width,
      minWidth: "200px",
      "&:hover": {
        transform: "scale(1.1)",
        animation: `${popOutandIn} 1s ease`,
        margin: "10px 30px",
        transition: "margin 1s linear",
        outline: "none",
        boxShadow: "0 0 30px  #a4d3f1",
      },
    }
  },
)

const StyledCard = styled(Card)(() => ({
  borderRadius: 0,
  boxShadow: "none",
}))

const StyledCardContent = styled(CardContent)(({ color = "#2e4857" }: { color?: string }) => ({
  backgroundColor: color,
  height: "100px",
  padding: "1rem 1.5rem 1.5rem",
}))

const StyledOSMediaBox = styled(Box)({
  position: "relative",
  height: "190px",
  overflow: "hidden",
})

const StyledCardMedia = styled(CardMedia)(
  ({ bgColor = "rgba(0, 0, 0, 0.08)" }: { bgColor?: string }) => ({
    width: "100%",
    minWidth: "100%",
    paddingBottom: "100%",
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
  onHover,
  onHoverOut,
  rowHovered,
  location,
  locCardHovered,
  handleCardClick,
}: {
  color: string
  colorHoverContent?: string
  gameInfo: GameInfo
  width?: number | string
  onHover: () => void
  onHoverOut: () => void
  rowHovered: boolean
  location: number
  locCardHovered: number | undefined
  handleCardClick: () => void
}) => {
  const { gameName, image, live, shortDesc, genres, os, nfts, gif } = gameInfo
  const [cardHovered, setCardHovered] = useState(false)
  const [animation, setAnimation] = useState("")
  const [cardMargin] = useState<string>("10px 5px")
  const [transition] = useState<string>("")

  const handleMouseOver = () => {
    setCardHovered(true)
    onHover()
  }

  const handleMouseOut = () => {
    setCardHovered(false)
    onHoverOut()
  }

  useEffect(() => {
    if (typeof locCardHovered === "number" && rowHovered && !cardHovered) {
      setAnimation(`${location < locCardHovered ? moveLeft : moveRight} 1s ease`)
      // cardMargin = "10px 5px"
      // transition = "margin 1s ease"
    }
  })

  return (
    <>
      <StyledCardActionArea
        width={width}
        onClick={handleCardClick}
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
        animation={animation}
        margin={cardMargin}
        transition={transition}
      >
        <StyledCard color={color}>
          <StyledOSMediaBox>
            <GameOSInfo os={os} size={20} color="#fff" />
            {nfts && <NFTSDisplay />}
            {!cardHovered ? (
              <StyledCardMedia image={image} src="img" />
            ) : (
              <StyledCardMedia image={gif ? gif : image} src="img" />
            )}
          </StyledOSMediaBox>
          <StyledCardContent color={!cardHovered ? color : colorHoverContent}>
            {!cardHovered && <LiveGameInfoText live={live ? true : false} />}
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
    </>
  )
}

export default GameCard
