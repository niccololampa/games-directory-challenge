import React from "react"
import "./App.css"
import { Container } from "@mui/material"
import sampleGameImage from "./sample-game-image.png"
import jsonData from "./sample-data.json"
import type { GameInfo } from "./types"

import {
  NavigationBar,
  MainFooter,
  SearchBox,
  SelectDropDown,
  SwitchFilter,
  PageHeader1,
  GameCard,
} from "./components"

const data: GameInfo[] = jsonData as GameInfo[]

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

        <Container sx={{ display: "flex" }} disableGutters>
          {data.map((game, index) => (
            <GameCard key={index} gameInfo={game} color="#2e4857" width={256} />
          ))}
        </Container>
      </Container>
      <MainFooter pages={pages} />
    </div>
  )
}

export default App
