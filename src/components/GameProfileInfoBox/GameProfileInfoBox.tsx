import React from "react"
import { Stack } from "@mui/material"
import { StyledBox, StyledLabel, StyledValue } from "./GameProfileInfoBoxStyled"

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
