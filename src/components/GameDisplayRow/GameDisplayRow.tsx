import React, { useState } from "react"
import type { GameInfo } from "../../types"
import { GameCard } from "../../components"
import { StyledContainerRow } from "./GamesDisplayRowStyles"

const GameDisplayRow = ({
  row,
  handleCardClick,
}: {
  row: GameInfo[]
  handleCardClick: (game: GameInfo) => void
}) => {
  const [rowHovered, setRowHovered] = useState(false)
  const [locCardHovered, setLocCardHovered] = useState<number | undefined>()

  const onHover = (index: number) => {
    setRowHovered(true)
    setLocCardHovered(index)
  }

  const onHoverOut = () => {
    setRowHovered(false)
    setLocCardHovered(undefined)
  }

  return (
    <StyledContainerRow maxWidth="xl">
      {row.map((game, index) => (
        <>
          <GameCard
            key={index}
            gameInfo={game}
            color="#2e4857"
            colorHoverContent="#1e2c35"
            handleCardClick={() => handleCardClick(game)}
            width={256}
            onHover={() => onHover(index)}
            onHoverOut={onHoverOut}
            rowHovered={rowHovered}
            location={index}
            locCardHovered={locCardHovered}
          />
        </>
      ))}
    </StyledContainerRow>
  )
}

export default GameDisplayRow
