import * as React from "react"
import { ReactComponent as DiscordLogo } from "../../discord.svg"
import { Adb, Twitter, Facebook } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"

const SocialMediaLinks = () => {
  return (
    <>
      {/* FIXME: provide color through file */}
      <IconButton size="large" color="inherit">
        <Twitter sx={{ color: "#eeeea5" }} />
      </IconButton>
      <IconButton size="large" color="inherit">
        <Facebook sx={{ color: "#eeeea5" }} />
      </IconButton>
      <IconButton size="large" color="inherit">
        <DiscordLogo fill="#eeeea5" />
      </IconButton>
    </>
  )
}

export default SocialMediaLinks
