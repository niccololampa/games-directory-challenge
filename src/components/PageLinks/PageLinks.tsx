import React from "react"
import { Button } from "@mui/material/"

const PageLinks = ({
  pages,
  handleLinkClick,
}: {
  pages: string[]
  handleLinkClick: () => void
}) => {
  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleLinkClick}
          sx={{ my: 2, color: "#ffffff", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </>
  )
}

export default PageLinks
