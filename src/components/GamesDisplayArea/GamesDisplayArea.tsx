import React from "react"
import { Container } from "@mui/material"
import { GameCard } from "../../components"
import type { GameInfo } from "../../types"

const GamesDisplayArea = ({ gamesDisplayed }: { gamesDisplayed: GameInfo[] }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
      }}
    >
      {gamesDisplayed.map((game, index) => (
        <GameCard
          key={index}
          gameInfo={game}
          color="#2e4857"
          colorHoverContent="#1e2c35"
          width={256}
        />
      ))}
    </Container>
  )
}

export default GamesDisplayArea
