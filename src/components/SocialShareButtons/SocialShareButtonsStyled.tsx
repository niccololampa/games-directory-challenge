import { IconButton } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledIconButton = styled(IconButton)(() => ({
  border: "1px solid #6b6b6b",
  borderRadius: "20%",
  padding: 2,
  backgroundColor: "#6b6b6b",
  "&:hover": {
    backgroundColor: "#6b6b6b",
  },
}))
