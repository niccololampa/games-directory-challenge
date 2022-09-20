import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

export const StyledGenre = styled(Typography)(
  ({ fontWeight }: { fontWeight: string | number }) => ({
    fontFamily: "Keania One",
    color: "#eeeea5",
    fontSize: 14,
    marginLeft: 2,
    fontWeight,
  }),
)
