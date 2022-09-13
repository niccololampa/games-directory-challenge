import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material/"

const PageLinks = ({ pages }: { pages: string[] }) => {
  const navigate = useNavigate()

  const handleNavigate = (page: string) => {
    navigate(page)
  }
  return (
    <>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => {
            handleNavigate(page)
          }}
          sx={{ my: 2, color: "#ffffff", display: "block", textTransform: "capitalize" }}
        >
          {page}
        </Button>
      ))}
    </>
  )
}

export default PageLinks
