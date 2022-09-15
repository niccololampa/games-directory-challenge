import * as React from "react"
import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"

const StyledTypography = styled(Typography)(() => ({
  fontSize: "22px",
  fontWeight: "bold",
}))

const PageHeader2 = ({ title }: { title: string }) => {
  return <StyledTypography variant="h2">{title}</StyledTypography>
}

export default PageHeader2
