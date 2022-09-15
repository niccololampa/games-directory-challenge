import React from "react"
import { Twitter, Facebook, YouTube } from "@mui/icons-material"
import { styled } from "@mui/material/styles"
import { ReactComponent as DiscordLogo } from "../../discord.svg"
import { ReactComponent as MediumLogo } from "../../medium.svg"
import { ReactComponent as TelegramLogo } from "../../telegram.svg"
import { IconButton, ButtonProps } from "@mui/material"

const StyledIconButton = styled(IconButton)(() => ({
  border: "1px solid #6b6b6b",
  borderRadius: "20%",
  padding: 2,
  backgroundColor: "#6b6b6b",
  "&:hover": {
    backgroundColor: "#6b6b6b",
  },
}))

const SocialShareBoxButton = ({
  fillColor,
  size,
}: {
  fillColor: string
  size: ButtonProps["size"]
}) => {
  return (
    <>
      <StyledIconButton size={size}>
        <DiscordLogo fill={fillColor} />
      </StyledIconButton>
      <StyledIconButton size={size}>
        <Twitter sx={{ color: fillColor }} />
      </StyledIconButton>
      <StyledIconButton size={size}>
        <TelegramLogo fill={fillColor} />
      </StyledIconButton>
      <StyledIconButton size={size}>
        <Facebook sx={{ color: fillColor }} />
      </StyledIconButton>
      <StyledIconButton size={size}>
        <MediumLogo fill={fillColor} />
      </StyledIconButton>
      <StyledIconButton size={size}>
        <YouTube sx={{ color: fillColor }} />
      </StyledIconButton>
    </>
  )
}

export default SocialShareBoxButton
