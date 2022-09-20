import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledHighlightBox = styled(Box)(
  ({ status, colorNeg, colorPos }: { status: boolean; colorNeg: string; colorPos: string }) => ({
    backgroundColor: status ? colorPos : colorNeg,
    borderRadius: "5%",
    height: "30px",
    minWidth: "fit-content",
    padding: "8px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
)

export const StyledText = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase",
})
