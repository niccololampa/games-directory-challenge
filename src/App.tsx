import React from "react"
import "./App.css"
import { Container } from "@mui/material"
import sampleGameImage from "./sample-game-image.png"

import {
  NavigationBar,
  MainFooter,
  SearchBox,
  SelectDropDown,
  SwitchFilter,
  PageHeader1,
  GameCard,
} from "./components"

function App() {
  const pages = ["Games", "News", "Allies", "Badges", "WhitePaper"]

  return (
    <div className="App">
      <NavigationBar pages={pages} />
      {/* FIXME: Use react-router for additional pages */}
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
        <GameCard
          color="#2e4857"
          title="test"
          subtitle="test"
          image={sampleGameImage}
          width={256}
        />
      </Container>

      <MainFooter pages={pages} />
    </div>
  )
}

export default App
