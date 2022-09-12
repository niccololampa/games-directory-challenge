import React, { useState } from "react"
import { Box, Container, Typography } from "@mui/material"
import { HRBorder, PageLinks, SocialMediaLinks } from "../../components"
import earnAllianceLogo from "../../earn-alliance-logo-sample.png"

const MainFooter = ({ pages }: { pages: string[] }) => {
  const footerPages = ["Privacy Policy", "Terms of Use", "Cookies Policy"]
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Container maxWidth={false} sx={{ marginTop: "80px" }}>
      <HRBorder />

      <Container sx={{ display: "flex", marginTop: 5 }} disableGutters maxWidth="xl">
        <Container disableGutters sx={{ flexGrow: 1 }}>
          <Box component="img" alt="Earn Allaince Logo" src={earnAllianceLogo} />
        </Container>

        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <PageLinks pages={pages} handleLinkClick={handleCloseNavMenu} />
          <SocialMediaLinks />
        </Box>
      </Container>

      <Container
        sx={{
          display: "flex",

          alignItems: "center",
        }}
        disableGutters
        maxWidth="xl"
      >
        <Typography
          sx={{
            color: "#768085",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          All Rights Reserved 2022 Earn Alliance
        </Typography>
        <PageLinks pages={footerPages} handleLinkClick={handleCloseNavMenu} />
      </Container>
    </Container>
  )
}

export default MainFooter
