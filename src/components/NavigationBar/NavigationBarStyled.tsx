import { styled } from "@mui/material/styles"
import { AppBar, IconButton, Menu, Container } from "@mui/material"

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
})

export const StyledLogoContainer = styled(Container)({
  flexGrow: 1,
  justifyContent: "center",
})

export const StyledIconButton = styled(IconButton)({
  p: 0,
})

export const StyledMenu = styled(Menu)({
  mt: "45px",
})
