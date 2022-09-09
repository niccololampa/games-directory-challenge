import React, { useState } from "react"
import "./App.css"
import { Container } from "@mui/material"
import sampleGameImage from "./sample-game-image.png"
import jsonData from "./sample-data.json"
import type { GameInfo, GameFilter } from "./types"
import { SelectChangeEvent } from "@mui/material/Select"

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
  const genres = ["Strategy", "Action", "FPS"]

  const [gameFilter, setGameFilter] = useState<GameFilter>({
    search: "",
    genre: "",
    showLive: false,
  })

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameFilter({ ...gameFilter, search: event.target.value })
  }

  const handleGameGenreFilter = (event: SelectChangeEvent) => {
    setGameFilter({ ...gameFilter, genre: event.target.value })
  }

  const handleLiveGameFilter = () => {
    setGameFilter({ ...gameFilter, showLive: !gameFilter.showLive })
  }
  console.log(gameFilter)
  return (
    <div className="App">
      <NavigationBar pages={pages} />
      {/* FIXME: Use react-router for additional pages */}
      <Container maxWidth="xl" sx={{ marginTop: "80px" }}>
        <PageHeader1 title={"Game Directory"} />
        <div className="filterSection">
          <div>
            <div className="filter-input-label">Search</div>
            <SearchBox value={gameFilter.search} onChange={handleSearch} />
          </div>
          <div>
            <div className="filter-input-label"> Game Genre</div>
            <SelectDropDown
              options={genres}
              selected={gameFilter.genre}
              onChange={handleGameGenreFilter}
            />
          </div>
          <div className="live-games-filter">
            <SwitchFilter handleCheck={handleLiveGameFilter} checked={gameFilter.showLive} />
            <div className="live-games-text">Live Games</div>
          </div>
        </div>
      </Container>

      <Container maxWidth="xl" sx={{ display: "flex" }}>
        {data.map((game, index) => (
          <GameCard key={index} gameInfo={game} color="#2e4857" width={256} />
        ))}
      </Container>
      <MainFooter pages={pages} />
    </div>
  )
}

export default App
