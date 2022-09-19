import React from "react"
import { Box, Stack, Typography, Avatar } from "@mui/material"
import moment from "moment"
import { GamePost } from "../../types"
import { styled } from "@mui/material/styles"

const StyledPostBox = styled(Box)(() => ({
  backgroundColor: "#3f3f3f",
  borderRadius: "1%",
  border: "5px",
  display: "flex",
  alignItems: "left",
  height: "210px",
  padding: 30,
}))

const StyledImageBox = styled(Box)(() => ({
  width: "20%",
  height: "100%",
  borderRadius: "10%",
}))

const StyledInfoText = styled(Box)(() => ({
  fontSize: "12px",
  fontWeight: "bold",
}))

const StyledSummaryText = styled(Box)(() => ({
  color: "#fff",
  fontSize: "15px",
}))

const StyledPostText = styled(Typography)(() => ({
  maxWidth: "100%",
  wordWrap: "break-word",
  color: "#fff",
}))

const StyledProfileStack = styled(Stack)(() => ({
  alignItems: "center",
}))

const StyledInfoStack = styled(Stack)(() => ({
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  // whiteSpace: "nowrap",
}))

const GamePostCard = ({ post }: { post: GamePost }) => {
  const { id, user, date, image } = post

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
