import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Stack } from "@mui/material"
import {
  PageHeader1,
  LiveGameInfoText,
  GameProfileInfoBox,
  GameTrailerPlayer,
  HighlightBox,
  GameDescText,
  GameCoverPhoto,
} from "../../../components"
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
      <GameCoverPhoto coverPhoto={gameDetails.coverPhoto} width="100%" height="400px" />
      <Container maxWidth="xl" sx={{ marginTop: "80px" }}>
        <LiveGameInfoText live={gameDetails.live} />
        <PageHeader1 title={gameDetails.gameName} />
        <Stack direction="row" spacing={2} marginBottom={2}>
          <HighlightBox
            status={gameDetails.claimed}
            textPos="Claimed"
            textNeg="Unclaimed"
            colorNeg="#6b6b6b"
            colorPos="#eed4a5"
          />
          <HighlightBox
            status={gameDetails.claimed}
            textPos="THIS GAME HAS BEEN CLAIMED BY THE GAME PUBLISHER"
            textNeg="THIS GAME HAS NOT BEEN CLAIMED BY THE GAME PUBLISHER"
            colorNeg="#282828"
            colorPos="#282828"
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <GameProfileInfoBox label="publisher" value={gameDetails.publisher} />
          <GameProfileInfoBox label="Game Genre" values={gameDetails.genres} />
          <GameProfileInfoBox label="protcol" value={gameDetails.protocol} />
        </Stack>
        <GameTrailerPlayer url={gameDetails.trailerLink} />
        <GameDescText description={gameDetails.longDesc} fontSize="15px" />
      </Container>
    </div>
  )
}

export default GameProfile
