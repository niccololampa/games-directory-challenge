import * as React from "react"
import { StyledTypography } from "./PageHeader1Styled"

const PageHeader1 = ({ title }: { title: string }) => {
  return <StyledTypography variant="h1">{title}</StyledTypography>
}

export default PageHeader1
