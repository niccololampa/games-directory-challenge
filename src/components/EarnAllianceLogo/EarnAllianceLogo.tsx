import React from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import earnAllianceLogo from "../../earn-alliance-logo.png"

const EarnAllianceLogo = ({
  width,
  height,
}: {
  width: string | number
  height: string | number
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <Box
      component="img"
      alt="Earn Alliance Logo"
      src={earnAllianceLogo}
      width={width}
      height={height}
      onClick={handleClick}
      sx={{ cursor: "pointer" }}
    />
  )
}

export default EarnAllianceLogo
