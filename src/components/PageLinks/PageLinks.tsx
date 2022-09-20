import React from "react"
import { useNavigate } from "react-router-dom"
import { StyledLinkButton } from "./PageLinksStyled"

const PageLinks = ({ pages }: { pages: string[] }) => {
  const navigate = useNavigate()

  const handleNavigate = (page: string) => {
    navigate(page)
  }
  return (
    <>
      {pages.map((page) => (
        <StyledLinkButton
          key={page}
          onClick={() => {
            handleNavigate(page)
          }}
        >
          {page}
        </StyledLinkButton>
      ))}
    </>
  )
}

export default PageLinks
