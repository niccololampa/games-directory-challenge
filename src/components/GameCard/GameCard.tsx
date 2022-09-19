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

const moveRight = keyframes`
0% {
  transform: translateX(0%);
},
10% {
  transform: translateX(5%);
},
20% {
  transform: translateX(10%);
},
25% {
  transform: translateX(12.5%);
  margin-left: 7.5px;
  margin-right: 7.5px;
},
30% {
  transform: translateX(15%);
},
40% {
  transform: translateX(20%);
},
50% {
  transform: translateX(25%);
},
60% {
  transform: translateX(20%);
},
70% {
  transform: translateX(15%);
  margin-left: 0;
  margin-right: 0;
},
75% {
  transform: translateX(12.5%);
  margin-left: 0;
  margin-right: 0;
},
80% {
  transform: translateX(10%);
},
90% {
  transform: translateX(5%);
},
100% {
 transform: translateX(0%);
  margin-left: 5px;
  margin-right: 5px;
 }
`

const moveLeft = keyframes`
0% {
  transform: translateX(0%);
  margin-left: 0;
  margin-right: 0;
},
10% {
  transform: translateX(-5%);
},
20% {
  transform: translateX(-10%);
},
25% {
  transform: translateX(-12.5%);
  margin-left: 7.5px;
  margin-right: 7.5px;
},
30% {
  transform: translateX(-15%);
},
40% {
  transform: translateX(-20%);
},
50% {
  transform: translateX(-25%);
},
60% {
  transform: translateX(-20%);
},
70% {
  transform: translateX(-15%);
  margin-left: 0;
  margin-right: 0;
},
75% {
  transform: translateX(-12.5%);
  margin-left: 0;
  margin-right: 0;
},
80% {
  transform: translateX(-10%);
},
90% {
  transform: translateX(-5%);
},
100% {
 transform: translateX(0%);
  margin-left: 5px;
  margin-right: 5px;
 }
`

const popOutandIn = keyframes`
0% {
    transform: scale(1.0),
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
}
`

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
}) => {
  const { gameName, image, live, shortDesc, genres, os, nfts, gif } = gameInfo
  const [modalVisible, setModalVisible] = useState(false)
  const [cardHovered, setCardHovered] = useState(false)

  let animation = ""
  const cardMargin = "10px 5px"
  const transition = ""

  const handleCardClick = () => {
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  const handleMouseOver = () => {
    setCardHovered(true)
    onHover()
  }

  const handleMouseOut = () => {
    setCardHovered(false)
    onHoverOut()
  }

  // (index !== genre.length - 1 ? ", " : "")}

  if (typeof locCardHovered === "number" && rowHovered && !cardHovered) {
    animation = `${location < locCardHovered ? moveLeft : moveRight} 1s ease`
    // cardMargin = "10px 5px"
    // transition = "margin 1s ease"
  }

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
