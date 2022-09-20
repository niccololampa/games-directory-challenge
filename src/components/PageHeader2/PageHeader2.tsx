import * as React from "react"
import { StyledTypography } from "./PageHeader2Styled"

const PageHeader2 = ({ title }: { title: string }) => {
  return <StyledTypography variant="h2">{title}</StyledTypography>
}

export default PageHeader2
