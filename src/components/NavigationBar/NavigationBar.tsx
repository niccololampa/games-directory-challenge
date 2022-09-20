import React from "react"
import { SocialMediaLinks, PageLinks } from "../../components"
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import HRBorder from "../HRBorder/HRBorder"
import "./NavigationBar.css"
import earnAllianceLogo from "../../earn-alliance-logo.png"
import {
  StyledAppBar,
  StyledLogoContainer,
  StyledIconButton,
  StyledMenu,
} from "./NavigationBarStyled"

const settings = ["Profile", "Account", "Dashboard", "Logout"]

const NavigationBar = ({ pages }: { pages: string[] }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <StyledAppBar position="static" className="app-bar">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Box
              component="img"
              sx={{
                height: 84,
                width: 150,
                padding: 3,
                display: { xs: "none", md: "flex" },
              }}
              alt="Earn Allaince Logo"
              src={earnAllianceLogo}
            />

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <StyledLogoContainer
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 84,
                  width: 150,
                  padding: 3,
                }}
                alt="Earn Allaince Logo"
                src={earnAllianceLogo}
              />
            </StyledLogoContainer>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <PageLinks pages={pages} />
              <SocialMediaLinks />
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <StyledIconButton onClick={handleOpenUserMenu}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </StyledIconButton>
              </Tooltip>
              <StyledMenu
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </StyledMenu>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
      <HRBorder />
    </>
  )
}
export default NavigationBar
