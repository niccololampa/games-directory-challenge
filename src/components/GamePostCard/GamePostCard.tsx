import React from "react"
import { Box, Avatar } from "@mui/material"
import moment from "moment"
import { GamePost } from "../../types"
import {
  StyledPostBox,
  StyledImageBox,
  StyledInfoText,
  StyledPostText,
  StyledProfileStack,
  StyledInfoStack,
} from "./GamePostCardStyled"

const GamePostCard = ({ post }: { post: GamePost }) => {
  const { user, date, image } = post

  return (
    <>
      <StyledPostBox>
        <StyledImageBox>
          <Box component="img" alt="coverPhoto" src={image} width={"100%"} height={"100%"} />
        </StyledImageBox>

        <StyledInfoStack direction="column" spacing={1} marginLeft={2}>
          <StyledProfileStack direction="row" spacing={1}>
            <StyledInfoText>{moment(date).format("DD MMMM YYYY")}</StyledInfoText>
            <Avatar alt={user.userName} src={user.userImage} />
            <StyledInfoText>{user.userName}</StyledInfoText>
          </StyledProfileStack>
          <StyledPostText>{post.post}</StyledPostText>
        </StyledInfoStack>
      </StyledPostBox>
    </>
  )
}

export default GamePostCard
