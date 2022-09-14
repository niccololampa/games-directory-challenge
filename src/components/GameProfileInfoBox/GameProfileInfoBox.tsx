import React from "react"
import { Box, Typography, Stack } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledBox = styled(Box)({
  backgroundColor: "#282828",
  borderRadius: "4%",
  width: "200px",
  height: "30px",
  padding: "20px",
})

const StyledLabel = styled(Typography)({
  color: "#7f7f7f",
  fontSize: "10px",
  textTransform: "uppercase",
})

const StyledValue = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase",
})

const GameProfileInfoBox = ({
  label,
  value,
  values,
}: {
  label: string
  value?: string
  values?: string[]
}) => {
  return (
    <StyledBox>
      <StyledLabel>{label}</StyledLabel>
      <Stack direction="row">
        <StyledValue>{value}</StyledValue>
        {values?.map((genre: string, index: number) => (
          <StyledValue key={index}>{genre}&nbsp;</StyledValue>
        ))}
      </Stack>
    </StyledBox>
  )
}

export default GameProfileInfoBox
