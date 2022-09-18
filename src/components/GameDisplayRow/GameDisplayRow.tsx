import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"
import type { GameInfo } from "../../types"
import { GameCard } from "../../components"

const GameDisplayRow = ({ row }: { row: GameInfo[] }) => {
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

  const StyledContainerRow = styled(Container)(() => {
    return {
      display: "flex",
      justifyContent: "center",
      alignContent: "space-around",
      // columnGap: rowHovered ? "0px" : "initial",
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
