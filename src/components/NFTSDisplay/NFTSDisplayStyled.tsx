import { Box, Typography } from "@mui/material/"
import { styled } from "@mui/material/styles"

export const StyledNFTSBox = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  margin: "3px",
  zIndex: 1,
  borderRadius: "35%",
  backgroundColor: "#000000",
  padding: "3px 6px 1px 6px",
})

export const StyledNFTSText = styled(Typography)({
  fontFamily: "Montserrat",
  color: "#fff",
  fontSize: 14,
  fontWeight: "bold",
})
