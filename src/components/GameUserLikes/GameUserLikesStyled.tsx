import { styled } from "@mui/material/styles"
import { Card, Container, CardContent } from "@mui/material"

export const StyledContainerRow = styled(Container)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-around",
    marginTop: "20px",
  }
})

export const StyledCardContent = styled(CardContent)(() => {
  return {
    display: "flex",
    background: "black",
    justifyContent: "center",
    color: "#ffffff",
  }
})

export const StyledCard = styled(Card)(() => {
  return {
    display: "flex",
    margin: "10px",
    background: "black",
    justifyContent: "center",
    color: "#ffffff",
    maxWidth: "345px",
    minWidth: "fit-content",
    "&:hover": {
      transform: "scale(1.5)",
    },
  }
})
