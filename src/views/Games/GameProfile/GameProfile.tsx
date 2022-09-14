import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Stack } from "@mui/material"
import { PageHeader1, LiveGameInfoText, GameProfileInfoBox } from "../../../components"
import jsonData from "../../../sample-data.json"
import type { GameInfo, GameFilter } from "../../../types"

const data: GameInfo[] = jsonData as GameInfo[]

const getGameDetails = (id: string) => {
  return data.find((game) => game.id === id)
}

const GameProfile = () => {
  const { id } = useParams()
  const [gameDetails, setGameDetails] = useState<GameInfo>()

  useEffect(() => {
    if (!id) {
      return
    }

    setGameDetails(getGameDetails(id))
  }, [id])

  if (!gameDetails) {
    return <div></div>
  }

  return (
    <div>
      <Container maxWidth="xl" sx={{ marginTop: "80px" }}>
        <LiveGameInfoText live={gameDetails.live} />
        <PageHeader1 title={gameDetails.gameName} />
        <Stack direction="row" spacing={2}>
          <GameProfileInfoBox label="publisher" value={gameDetails.publisher} />
          <GameProfileInfoBox label="Game Genre" values={gameDetails.genres} />
          <GameProfileInfoBox label="protcol" value={gameDetails.protocol} />
        </Stack>
      </Container>
    </div>
  )
}

export default GameProfile
