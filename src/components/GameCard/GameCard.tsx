import React, { useState, useEffect } from "react"
import {
  LiveGameInfoText,
  GameGenreText,
  GameNameText,
  GameOSInfo,
  NFTSDisplay,
} from "../../components"
import type { GameInfo } from "../../types"
import { moveRight, moveLeft } from "./GameCardAnimation"
import {
  StyledCardActionArea,
  StyledCard,
  StyledCardContent,
  StyledOSMediaBox,
  StyledCardMedia,
  StyledDescBox,
  StyledDescription,
  StyledGenreContainer,
} from "./GameCardStyled"

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
      return
    }

    setAnimation("")
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
              <StyledGenreContainer disableGutters>
                {genres.map((genre, index) => (
                  <GameGenreText key={index} genre={genre} />
                ))}
              </StyledGenreContainer>
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
