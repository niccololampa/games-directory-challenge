import React from "react"
import { Box } from "@mui/material"
import earnAllianceLogo from "../../earn-alliance-logo.png"

const EarnAllianceLogo = ({
  width,
  height,
}: {
  width: string | number
  height: string | number
}) => (
  <Box
    component="img"
    alt="Earn Alliance Logo"
    src={earnAllianceLogo}
    width={width}
    height={height}
  />
)

export default EarnAllianceLogo
