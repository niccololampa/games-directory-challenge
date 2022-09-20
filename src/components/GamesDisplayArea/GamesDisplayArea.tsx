import React, { useState } from "react"
import { GameDisplayRow, GameModal } from "../../components"
import type { GameInfo } from "../../types"

const GamesDisplayArea = ({ gamesDisplayed }: { gamesDisplayed: GameInfo[] }) => {
  const gamesPerRow = 5
  const [modalVisible, setModalVisible] = useState(false)
  const [rowHoveredIndex, setRowHoveredIndex] = useState<number | undefined>(undefined)
  const [gameModal, setGameModal] = useState<GameInfo>({} as GameInfo)
  const numOfGames = gamesDisplayed.length

  const handleCardClick = (game: GameInfo) => {
    setGameModal(game)
    setModalVisible(true)
    // will set rowHovered condition for the clicked row to false. So animation doesn't trigger upon click.
    setRowHoveredIndex(undefined)
  }

  const handleModalClose = () => {
    // will set rowHovered condition for the clicked row to false. So animation doesn't trigger upon modal exit.
    setRowHoveredIndex(undefined)
    setGameModal({} as GameInfo)
    setModalVisible(false)
  }

  const handleRowHover = (index: number) => {
    setRowHoveredIndex(index)
  }

  const handleRowHoverOut = () => {
    setRowHoveredIndex(undefined)
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
          handleRowHover={() => handleRowHover(index)}
          handleRowHoverOut={handleRowHoverOut}
          rowHovered={rowHoveredIndex === index ? true : false}
        />
      ))}
      {gameModal && (
        <GameModal visible={modalVisible} gameInfo={gameModal} handleClose={handleModalClose} />
      )}
    </div>
  )
}

export default GamesDisplayArea
