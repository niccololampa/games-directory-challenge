import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import { useParams } from "react-router-dom"
import { Container, Box, Stack } from "@mui/material"
import { Favorite, Groups, Map as MapIcon, Support } from "@mui/icons-material"
import {
  PageHeader1,
  PageHeader2,
  LiveGameInfoText,
  GameProfileInfoBox,
  GameTrailerPlayer,
  HighlightBox,
  GameDescText,
  GameCoverPhoto,
  GameProfileImage,
  ColoredButton,
  SocialShareButtons,
  GameUpdateCard,
  GamePostCard,
  GameUserLikes,
} from "../../../components"
import jsonData from "../../../sample-data.json"
import type { GameInfo, GameFilter, GameUpdate } from "../../../types"

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

const StyledUpdateBox = styled(Box)({
  height: "500px",
  marginTop: "25px",
  // justifyContent: "center",
  display: "flex",
})

const GameProfile = () => {
  const numDispUpdates = 3
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

  const gameUpdates = (updates: GameUpdate[]) => {
    const displayedUpdates = []

    for (let i = 0; i < numDispUpdates; i++) {
      if (i > updates.length - 1) {
        break
      }

      displayedUpdates.push(updates[i])
    }

    return displayedUpdates
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
        <LiveGameInfoText live={gameDetails.live ? true : false} />
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
            backColor="#eeeea5"
            backColorHover="#f7f7d4"
            textColor="#000000"
          />

          <ColoredButton
            text="Support"
            handleClick={() => {
              console.log("Support Clicked")
            }}
            icon={Support}
            width="fit-content"
            backColor="#eeeea5"
            backColorHover="#f7f7d4"
            textColor="#000000"
          />

          <ColoredButton
            text="Team"
            handleClick={() => {
              console.log("Group Clicked")
            }}
            icon={Groups}
            width="fit-content"
            backColor="#eeeea5"
            backColorHover="#f7f7d4"
            textColor="#000000"
          />

          <ColoredButton
            text="Roadmap"
            handleClick={() => {
              console.log("Road MapClicked")
            }}
            icon={MapIcon}
            width="fit-content"
            backColor="#eeeea5"
            backColorHover="#f7f7d4"
            textColor="#000000"
          />
        </Stack>

        <Stack direction="row" spacing={1} marginBottom={2}>
          <SocialShareButtons fillColor="#fff" size="large" />
        </Stack>
        <PageHeader2 title="Latest Updates" />
        <StyledUpdateBox>
          <Stack direction="row" spacing={1} marginBottom={2}>
            {gameUpdates(gameDetails.updates).map((update, index) => (
              <GameUpdateCard key={index} update={update} />
            ))}
          </Stack>
        </StyledUpdateBox>

        <Stack direction="row" spacing={1} marginBottom={2}>
          <PageHeader2 title="Related Posts" />
          <ColoredButton
            text="Connect to Game's Twitter"
            handleClick={() => {
              console.log("Connect to Game's Twitter")
            }}
            width="fit-content"
            backColor="#000000"
            backColorHover="#f7f7d4"
            textColor="#ffffff"
            borderColor="#f7f7d4"
            borderStyle="solid"
            borderwidth="1px"
          />
          <ColoredButton
            text="Connect to Game's Annoucements"
            handleClick={() => {
              console.log("Connect to Game's Annoucements")
            }}
            width="fit-content"
            backColor="#000000"
            backColorHover="#f7f7d4"
            textColor="#ffffff"
            borderColor="#f7f7d4"
            borderStyle="solid"
            borderwidth="1px"
          />
        </Stack>

        {gameDetails.relatedPosts.map((post, index) => (
          <GamePostCard key={index} post={post} />
        ))}
        <PageHeader2 title="Others that like this game" />
        <GameUserLikes users={gameDetails.userLikes} />
      </Container>
    </div>
  )
}

export default GameProfile
