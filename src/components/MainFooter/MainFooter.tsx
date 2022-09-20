import React from "react"
import { Box, Container, Typography } from "@mui/material"
import { HRBorder, PageLinks, SocialMediaLinks, EarnAllianceLogo } from "../../components"
import {
  StyledFooterContainer,
  StyledTopSectionContainer,
  StyledLogoContainer,
  StyledLinkBox,
  StyledBottomSectionContainer,
  StyledCopyrightTypo,
} from "./MainFooterStyled"

const MainFooter = ({ pages }: { pages: string[] }) => {
  const footerPages = ["Privacy Policy", "Terms of Use", "Cookies Policy"]

  return (
    <StyledFooterContainer maxWidth={false}>
      <HRBorder />
      <StyledTopSectionContainer disableGutters maxWidth="xl">
        <StyledLogoContainer disableGutters>
          <EarnAllianceLogo width="250px" height="139px" />
        </StyledLogoContainer>
        <StyledLinkBox>
          <PageLinks pages={pages} />
          <SocialMediaLinks />
        </StyledLinkBox>
      </StyledTopSectionContainer>
      <StyledBottomSectionContainer disableGutters maxWidth="xl">
        <StyledCopyrightTypo>All Rights Reserved 2022 Earn Alliance</StyledCopyrightTypo>
        <PageLinks pages={footerPages} />
      </StyledBottomSectionContainer>
    </StyledFooterContainer>
  )
}

export default MainFooter
