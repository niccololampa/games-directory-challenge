import { styled } from "@mui/material/styles"
import { Box, Container, Typography } from "@mui/material"

export const StyledFooterContainer = styled(Container)({
  marginTop: "80px",
})

export const StyledTopSectionContainer = styled(Container)({
  display: "flex",
  marginTop: 5,
})

export const StyledLogoContainer = styled(Container)({
  flexGrow: 1,
})

export const StyledLinkBox = styled(Box)({
  flexGrow: 1,
  display: "flex",
})

export const StyledBottomSectionContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
})

export const StyledCopyrightTypo = styled(Typography)({
  color: "#768085",
  alignItems: "center",
  flexGrow: 1,
})
