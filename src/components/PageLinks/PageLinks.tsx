import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

const PageLinks = ({
  pages,
  handleCloseNavMenu,
}: {
  pages: string[]
  handleCloseNavMenu: () => void
}) => {
  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "#ffffff", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </>
  )
}

export default PageLinks
