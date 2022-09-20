import * as React from "react"
import moment from "moment"
import { Box } from "@mui/material"
import { ColoredButton } from "../../components"
import { GameUpdate } from "../../types"
import {
  StyledUpdateBox,
  StyledImageBox,
  StyledDateText,
  StyledTitleText,
  StyledSummaryBox,
  StyledSummaryText,
} from "./GameUpdateCardStyled"

const GameUpdateCard = ({ update }: { update: GameUpdate }) => {
  const { image, date, title, summary } = update
  return (
    <StyledUpdateBox>
      <StyledImageBox>
        <Box component="img" alt="coverPhoto" src={image} width={"100%"} height={"100%"} />
      </StyledImageBox>
      <StyledDateText>{moment(date).format("DD MMMM YYYY")}</StyledDateText>
      <StyledTitleText>{title}</StyledTitleText>

      <StyledSummaryBox>
        <StyledSummaryText>{summary}</StyledSummaryText>
      </StyledSummaryBox>
      <ColoredButton
        text="Read More"
        handleClick={() => {
          console.log("Read More")
        }}
        backColor="#eeeea5"
        backColorHover="#f7f7d4"
        textColor="#000000"
      />
    </StyledUpdateBox>
  )
}

export default GameUpdateCard
