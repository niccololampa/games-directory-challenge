import React, { useState } from "react"
import type { GameInfo } from "../../types"
import { GameCard } from "../../components"
import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"

const GameDisplayRow = ({
  row,
  rowHovered = false,
  handleCardClick,
  handleRowHover,
  handleRowHoverOut,
}: {
  row: GameInfo[]
  rowHovered: boolean
  handleCardClick: (game: GameInfo) => void
  handleRowHover: () => void
  handleRowHoverOut: () => void
}) => {
  const [locCardHovered, setLocCardHovered] = useState<number | undefined>()

  const onHover = (index: number) => {
    handleRowHover()
    setLocCardHovered(index)
  }

  const onHoverOut = () => {
    handleRowHoverOut()
    setLocCardHovered(undefined)
  }

  // FIXME: If imported via styled file causing problems in animation
  const StyledContainerRow = styled(Container)(() => {
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "space-around",
    }
  })

  return (
    <StyledContainerRow maxWidth="xl">
      {row.map((game, index) => (
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
      ))}
    </StyledContainerRow>
  )
}

export default GameDisplayRow
