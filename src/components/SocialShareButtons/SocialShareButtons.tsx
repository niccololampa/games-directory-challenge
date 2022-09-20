import React from "react"
import { Twitter, Facebook, YouTube } from "@mui/icons-material"
import { ReactComponent as DiscordLogo } from "../../discord.svg"
import { ReactComponent as MediumLogo } from "../../medium.svg"
import { ReactComponent as TelegramLogo } from "../../telegram.svg"
import { ButtonProps } from "@mui/material"
import { StyledIconButton } from "./SocialShareButtonsStyled"

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
