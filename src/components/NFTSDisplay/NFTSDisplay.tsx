import React from "react"
import { Box, Typography } from "@mui/material/"
import { styled } from "@mui/material/styles"

const StyledNFTSBox = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  margin: "3px",
  zIndex: 1,
  borderRadius: "35%",
  backgroundColor: "black",
  padding: "3px 6px 1px 6px",
})

const StyledNFTSText = styled(Typography)({
  fontFamily: "Montserrat",
  color: "#fff",
  fontSize: 14,
  fontWeight: "bold",
})

const NFTSDisplay = () => {
  return (
    <StyledNFTSBox>
      <StyledNFTSText>NFTS</StyledNFTSText>
    </StyledNFTSBox>
  )
}

export default NFTSDisplay
