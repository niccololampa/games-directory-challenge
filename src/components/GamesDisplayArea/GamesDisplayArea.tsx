import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"
import { GameDisplayRow, GameModal } from "../../components"
import type { GameInfo } from "../../types"

const GamesDisplayArea = ({ gamesDisplayed }: { gamesDisplayed: GameInfo[] }) => {
  const gamesPerRow = 5
  const [modalVisible, setModalVisible] = useState(false)
  const [gameModal, setGameModal] = useState<GameInfo>({} as GameInfo)
  const numOfGames = gamesDisplayed.length
  const numRows = Math.floor(numOfGames / gamesPerRow)
  const remGames = numOfGames % gamesPerRow

  const handleCardClick = (game: GameInfo) => {
    setGameModal(game)
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setGameModal({} as GameInfo)
    setModalVisible(false)
  }
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
        <GameDisplayRow
          row={row}
          key={index}
          handleCardClick={(game: GameInfo) => handleCardClick(game)}
        />
      ))}
      {gameModal && (
        <GameModal visible={modalVisible} gameInfo={gameModal} handleClose={handleModalClose} />
      )}
    </div>
  )
}

export default GamesDisplayArea
