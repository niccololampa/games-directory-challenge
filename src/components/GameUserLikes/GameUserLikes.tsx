import * as React from "react"
import Typography from "@mui/material/Typography"
import { CardMedia, CardActionArea, CardActions } from "@mui/material"
import type { GameUser } from "../../types"
import { StyledContainerRow, StyledCardContent, StyledCard } from "./GameUserLikesStyled"

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
