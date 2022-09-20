import { Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledLive = styled(Typography)(({ live }: { live: boolean }) => {
  return {
    fontFamily: "Keania One",
    color: live ? "#57d63d" : "#768085",
    fontWeight: "bold",
    fontSize: 14,
  }
})
