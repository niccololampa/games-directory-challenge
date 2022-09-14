import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import { useParams } from "react-router-dom"
import { Container, Box, Stack } from "@mui/material"
import { Favorite, Groups, Map as MapIcon, Support } from "@mui/icons-material"
import {
  PageHeader1,
  LiveGameInfoText,
  GameProfileInfoBox,
  GameTrailerPlayer,
  HighlightBox,
  GameDescText,
  GameCoverPhoto,
  GameProfileImage,
  ColoredButton,
} from "../../../components"
import jsonData from "../../../sample-data.json"
import type { GameInfo, GameFilter } from "../../../types"

const data: GameInfo[] = jsonData as GameInfo[]

const getGameDetails = (id: string) => {
  return data.find((game) => game.id === id)
}

const StyledImageBox = styled(Box)({
  backgroundColor: "#3f3f3f",
  borderRadius: "5%",
})

const StyledProfileImageContainer = styled(Container)({
  position: "absolute",
  top: "-200px",
})

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
      <StyledImageBox>
        <GameCoverPhoto coverPhoto={gameDetails.coverPhoto} width="100%" height="400px" />
      </StyledImageBox>
      <Container maxWidth="xl" sx={{ marginTop: "100px", position: "relative" }}>
        <StyledProfileImageContainer maxWidth="xl" disableGutters>
          <GameProfileImage image={gameDetails.image} width="200px" height="200px" />
        </StyledProfileImageContainer>
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

        <Stack direction="row" spacing={1} marginBottom={2}>
          <ColoredButton
            text="Like!"
            handleClick={() => {
              console.log("Liked Clicked")
            }}
            icon={Favorite}
            width="fit-content"
          />

          <ColoredButton
            text="Support"
            handleClick={() => {
              console.log("Support Clicked")
            }}
            icon={Support}
            width="fit-content"
          />

          <ColoredButton
            text="Team"
            handleClick={() => {
              console.log("Group Clicked")
            }}
            icon={Groups}
            width="fit-content"
          />

          <ColoredButton
            text="Roadmap"
            handleClick={() => {
              console.log("Road MapClicked")
            }}
            icon={MapIcon}
            width="fit-content"
          />
        </Stack>
      </Container>
    </div>
  )
}

export default GameProfile
