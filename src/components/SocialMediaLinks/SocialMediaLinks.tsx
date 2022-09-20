import React from "react"
import { ReactComponent as DiscordLogo } from "../../discord.svg"
import { Twitter, Facebook } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"

const SocialMediaLinks = () => {
  /* FIXME: provide color through file */
  const color = "#eeeea5"
  const size = "large"

  return (
    <>
      <IconButton size={size}>
        <Twitter sx={{ color }} />
      </IconButton>
      <IconButton size={size}>
        <Facebook sx={{ color }} />
      </IconButton>
      <IconButton size={size}>
        <DiscordLogo fill={color} />
      </IconButton>
    </>
  )
}

export default SocialMediaLinks
