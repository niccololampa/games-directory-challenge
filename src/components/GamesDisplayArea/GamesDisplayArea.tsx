import React, { useState } from "react"
import { GameDisplayRow, GameModal } from "../../components"
import type { GameInfo } from "../../types"

const GamesDisplayArea = ({ gamesDisplayed }: { gamesDisplayed: GameInfo[] }) => {
  const gamesPerRow = 5
  const [modalVisible, setModalVisible] = useState(false)
  const [gameModal, setGameModal] = useState<GameInfo>({} as GameInfo)
  const numOfGames = gamesDisplayed.length

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
