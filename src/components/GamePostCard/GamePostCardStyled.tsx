import { Box, Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledPostBox = styled(Box)(() => ({
  backgroundColor: "#3f3f3f",
  borderRadius: "1%",
  border: "5px",
  display: "flex",
  alignItems: "left",
  height: "210px",
  padding: 30,
}))

export const StyledImageBox = styled(Box)(() => ({
  width: "20%",
  height: "100%",
  borderRadius: "10%",
}))

export const StyledInfoText = styled(Box)(() => ({
  fontSize: "12px",
  fontWeight: "bold",
}))

export const StyledPostText = styled(Typography)(() => ({
  maxWidth: "100%",
  wordWrap: "break-word",
  color: "#fff",
}))

export const StyledProfileStack = styled(Stack)(() => ({
  alignItems: "center",
}))

export const StyledInfoStack = styled(Stack)(() => ({
  width: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
}))
