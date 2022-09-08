import React, { useState } from "react"
import { HRBorder, PageLinks, SocialMediaLinks } from "../../components"
import earnAllianceLogo from "../../earn-alliance-logo-sample.png"

const MainFooter = ({ pages }: { pages: string[] }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <div>
      <HRBorder />
      <img src={earnAllianceLogo} />
      <PageLinks pages={pages} handleCloseNavMenu={handleCloseNavMenu} />
      <SocialMediaLinks />
    </div>
  )
}

export default MainFooter
