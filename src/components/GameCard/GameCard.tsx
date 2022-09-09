import React from "react"
import Color from "color"
import { Grid, Typography, CardActionArea, Card, CardContent, CardMedia } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledCardActionArea = styled(CardActionArea)(({ width }: { width?: string | number }) => ({
  borderRadius: 16,
  transition: "0.2s",
  width,
  "&:hover": {
    transform: "scale(1.1)",
  },
}))

const StyledCard = styled(Card)(({ color, width }: { color: string; width?: number | string }) => ({
  width,
  borderRadius: 16,
  boxShadow: "none",
  "&:hover": {
    boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
  },
}))

const StyledCardContent = styled(CardContent)(({ color }: { color: string }) => ({
  backgroundColor: color,
  padding: "1rem 1.5rem 1.5rem",
}))

const StyledTitle = styled(Typography)({
  fontFamily: "Keania One",
  fontSize: "2rem",
  color: "#fff",
  textTransform: "uppercase",
})

const StyledSubTitle = styled(Typography)({
  fontFamily: "Montserrat",
  color: "#fff",
  opacity: 0.87,
  marginTop: "2rem",
  fontWeight: 500,
  fontSize: 14,
})

const StyledCardMedia = styled(CardMedia)(
  ({ bgColor = "rgba(0, 0, 0, 0.08)" }: { bgColor?: string }) => ({
    width: "100%",
    height: 0,
    paddingBottom: "75%",
    backgroundColor: bgColor,
  }),
)

const GameCard = ({
  color,
  image,
  title,
  subtitle,
  width,
}: {
  color: string
  image: string
  title: string
  subtitle: string
  width?: number | string
}) => {
  return (
    <StyledCardActionArea width={width}>
      <StyledCard color={color} width={width}>
        <StyledCardMedia image={image} />
        <StyledCardContent color={color}>
          <StyledTitle variant={"h2"}>{title}</StyledTitle>
          <StyledSubTitle>{subtitle}</StyledSubTitle>
        </StyledCardContent>
      </StyledCard>
    </StyledCardActionArea>
  )
}

export default GameCard
