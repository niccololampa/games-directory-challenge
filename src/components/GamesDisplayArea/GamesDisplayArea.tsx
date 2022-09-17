import React from "react"
import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"
import { GameDisplayRow } from "../../components"
import type { GameInfo } from "../../types"

const GamesDisplayArea = ({ gamesDisplayed }: { gamesDisplayed: GameInfo[] }) => {
  const gamesPerRow = 5
  const numOfGames = gamesDisplayed.length
  const numRows = Math.floor(numOfGames / gamesPerRow)
  const remGames = numOfGames % gamesPerRow

  const gamesRowArranged = () => {
    const rows: GameInfo[][] = []

    for (let i = 0; i < numOfGames; i = i + gamesPerRow) {
      rows.push(gamesDisplayed.slice(i, i + gamesPerRow))
    }
    return rows
  }

  const StyledContainerRow = styled(Container)(() => {
    return {
      display: "flex",
      alignContent: "space-around",
    }
  })

  return (
    <div>
      {gamesRowArranged().map((row, index) => (
        <GameDisplayRow row={row} key={index} />
      ))}
    </div>
  )
}

export default GamesDisplayArea
