import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledHighlightBox = styled(Box)(
  ({ status, colorneg, colorpos }: { status: boolean; colorneg: string; colorpos: string }) => ({
    backgroundColor: status ? colorpos : colorneg,
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
