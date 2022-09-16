import * as React from "react"
import moment from "moment"
import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { ColoredButton } from "../../components"
import { GameUpdate } from "../../types"

const StyledUpdateBox = styled(Box)(() => ({
  backgroundColor: "#3f3f3f",
  borderRadius: "5%",
  border: "5px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "250px",
  height: "400px",
  padding: 30,
}))

const StyledImageBox = styled(Box)(() => ({
  width: "100%",
  height: "200px",
}))

const StyledDateText = styled(Box)(() => ({
  marginTop: "20px",
  color: "#eeeea5",
  fontSize: "12px",
  textTransform: "uppercase",
  fontWeight: "bold",
}))

const StyledTitleText = styled(Box)(() => ({
  color: "#fff",
  marginTop: "5px",
  fontSize: "20px",
  fontWeight: "bold",
}))

const StyledSummaryText = styled(Box)(() => ({
  color: "#fff",
  marginTop: "10px",
  fontSize: "15px",
  height: "150px",
}))

const GameUpdateCard = ({ update }: { update: GameUpdate }) => {
  const { image, date, title, summary } = update
  return (
    <StyledUpdateBox>
      <StyledImageBox>
        <Box component="img" alt="coverPhoto" src={image} width={"100%"} height={"100%"} />
      </StyledImageBox>
      <StyledDateText>{moment(date).format("DD MMMM YYYY")}</StyledDateText>
      <StyledTitleText>{title}</StyledTitleText>

      <StyledSummaryText>{summary}</StyledSummaryText>
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
