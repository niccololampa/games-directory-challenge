import React from "react"
import "./App.css"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import { NavigationBar, SearchBox, SelectDropDown, SwitchFilter, PageHeader1 } from "./components"

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Container maxWidth="xl" sx={{ marginTop: "80px" }}>
        <PageHeader1 title={"Game Directory"} />
        <div className="filterSection">
          <div>
            <div className="filter-input-label">Search</div>
            <SearchBox />
          </div>
          <div>
            <div className="filter-input-label"> Game Genre</div>
            <SelectDropDown category="genre" />
          </div>
          <div className="live-games-filter">
            <SwitchFilter />
            <div className="live-games-text">Live Games</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App
