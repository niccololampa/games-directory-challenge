import * as React from "react"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import {
  Card,
  Container,
  Stack,
  CardMedia,
  CardContent,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material"
import type { GameUser } from "../../types"

const StyledContainerRow = styled(Container)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-around",
    marginTop: "20px",
  }
})

const StyledCardContent = styled(CardContent)(() => {
  return {
    display: "flex",
    background: "black",
    justifyContent: "center",
    color: "#ffffff",
  }
})

const StyledCard = styled(Card)(() => {
  return {
    display: "flex",
    margin: "10px",
    background: "black",
    justifyContent: "center",
    color: "#ffffff",
    maxWidth: "345px",
    "&:hover": {
      transform: "scale(1.5)",
    },
  }
})
const GameUserLikes = ({ users }: { users: GameUser[] }) => {
  return (
    <StyledContainerRow>
      {users.map((user, index) => (
        <StyledCard key={index}>
          <CardActionArea>
            <CardMedia component="img" height="200" image={user.userImage} alt="userImagge" />
            <StyledCardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.userName}
              </Typography>
            </StyledCardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </StyledCard>
      ))}
    </StyledContainerRow>
  )
}

export default GameUserLikes
