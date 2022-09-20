import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"

export const StyledContainerRow = styled(Container)(() => {
  return {
    display: "flex",
    alignContent: "space-around",
  }
})
