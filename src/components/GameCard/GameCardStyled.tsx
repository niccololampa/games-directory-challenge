import { popOutandIn } from "./GameCardAnimation"
import { styled } from "@mui/material/styles"
import {
  Container,
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material"

export const StyledCardActionArea = styled(CardActionArea)(
  ({
    width,
    animation,
    margin,
    transition,
  }: {
    width?: string | number
    animation?: string
    transition?: string
    margin: string
  }) => {
    return {
      margin,
      borderRadius: 0,
      borderTop: "solid",
      borderBottom: "solid",
      borderRight: "solid",
      borderWidth: 2,
      animation,
      borderImage:
        "linear-gradient( 135deg, transparent, #eed5a5, transparent, transparent, #eed5a5, transparent)",

      borderImageSlice: 50,
      transition: transition,
      width,
      minWidth: "200px",
      "&:hover": {
        transform: "scale(1.1)",
        animation: `${popOutandIn} 1s ease`,
        margin: "10px 30px",
        transition: "margin 1s linear",
        outline: "none",
        boxShadow: "0 0 30px  #a4d3f1",
      },
    }
  },
)

export const StyledCard = styled(Card)(() => ({
  borderRadius: 0,
  boxShadow: "none",
}))

export const StyledCardContent = styled(CardContent)(
  ({ color = "#2e4857" }: { color?: string }) => ({
    backgroundColor: color,
    height: "100px",
    padding: "1rem 1.5rem 1.5rem",
  }),
)

export const StyledOSMediaBox = styled(Box)({
  position: "relative",
  height: "190px",
  overflow: "hidden",
})

export const StyledCardMedia = styled(CardMedia)(
  ({ bgColor = "rgba(0, 0, 0, 0.08)" }: { bgColor?: string }) => ({
    width: "100%",
    minWidth: "100%",
    paddingBottom: "100%",
    backgroundColor: bgColor,
    position: "absolute",
    top: 0,
    left: 0,
  }),
)

export const StyledDescBox = styled(Box)({ height: "80%", overflow: "hidden" })

export const StyledDescription = styled(Typography)({
  fontFamily: "Montserrat",
  color: "#fff",
  opacity: 0.87,
  fontWeight: 500,
  fontSize: 14,
})

export const StyledGenreContainer = styled(Container)({
  display: "flex",
})
