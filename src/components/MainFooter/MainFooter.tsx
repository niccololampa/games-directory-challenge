import React from "react"
import { Box, Container, Typography } from "@mui/material"
import { HRBorder, PageLinks, SocialMediaLinks, EarnAllianceLogo } from "../../components"
import earnAllianceLogo from "../../earn-alliance-logo-sample.png"

const MainFooter = ({ pages }: { pages: string[] }) => {
  const footerPages = ["Privacy Policy", "Terms of Use", "Cookies Policy"]
  const handleLinkClick = () => {
    console.log("routing")
  }

  return (
    <Container maxWidth={false} sx={{ marginTop: "80px" }}>
      <HRBorder />

      <Container sx={{ display: "flex", marginTop: 5 }} disableGutters maxWidth="xl">
        <Container disableGutters sx={{ flexGrow: 1 }}>
          <EarnAllianceLogo width="250px" height="139px" />
        </Container>

        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <PageLinks pages={pages} handleLinkClick={handleLinkClick} />
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
        <PageLinks pages={footerPages} handleLinkClick={handleLinkClick} />
      </Container>
    </Container>
  )
}

export default MainFooter
