import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"

export const StyledContainerRow = styled(Container)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-around",
  }
})
