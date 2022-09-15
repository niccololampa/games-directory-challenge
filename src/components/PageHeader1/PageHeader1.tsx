import * as React from "react"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

const StyledTypography = styled(Typography)(() => ({
  fontSize: "35px",
  fontWeight: "bold",
}))

const PageHeader1 = ({ title }: { title: string }) => {
  return <StyledTypography variant="h1">{title}</StyledTypography>
}

export default PageHeader1
