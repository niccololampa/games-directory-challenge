import React, { useState, useEffect } from "react"
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
import "./App.css"
import { Container } from "@mui/material"
import sampleGameImage from "./sample-game-image.png"
import jsonData from "./sample-data.json"
import type { GameInfo, GameFilter } from "./types"

const data: GameInfo[] = jsonData as GameInfo[]

function App() {
  const pages = ["Games", "News", "Allies", "Badges", "WhitePaper"]
  const genres = ["Strategy", "Action", "FPS"]

  const [gameFilters, setGameFilters] = useState<GameFilter>({
    search: "",
    genre: "",
    showLive: false,
  })

  const [gamesDisplayed, setGamesDisplayed] = useState(data)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameFilters({ ...gameFilters, search: event.target.value })
  }

  const handleGameGenreFilter = (event: SelectChangeEvent) => {
    setGameFilters({ ...gameFilters, genre: event.target.value })
  }

  const handleLiveGameFilter = () => {
    setGameFilters({ ...gameFilters, showLive: !gameFilters.showLive })
  }

  useEffect(() => {
    const showGame = (game: GameInfo) => {
      const { search, showLive, genre } = gameFilters

      // for live game filter
      if (showLive && game.live !== showLive) {
        return false
      }

      // genre filter
      if (genre && !game.genres.includes(genre)) {
        return false
      }

      // for search filter
      if (search && game.gameName.toLowerCase().search(search.toLowerCase()) === -1) {
        return false
      }

      return true
    }
    const filteredGames = data.filter(showGame)

    setGamesDisplayed(filteredGames)
  }, [gameFilters])

  return (
    <div className="App">
      <NavigationBar pages={pages} />
      {/* FIXME: Use react-router for additional pages */}
      <Container maxWidth="xl" sx={{ marginTop: "80px" }}>
        <PageHeader1 title={"Game Directory"} />
        <div className="filterSection">
          <div>
            <div className="filter-input-label">Search</div>
            <SearchBox value={gameFilters.search} onChange={handleSearch} />
          </div>
          <div>
            <div className="filter-input-label"> Game Genre</div>
            <SelectDropDown
              options={genres}
              selected={gameFilters.genre}
              onChange={handleGameGenreFilter}
            />
          </div>
          <div className="live-games-filter">
            <SwitchFilter handleCheck={handleLiveGameFilter} checked={gameFilters.showLive} />
            <div className="live-games-text">Live Games</div>
          </div>
        </div>
      </Container>

      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
      >
        {gamesDisplayed.map((game, index) => (
          <GameCard key={index} gameInfo={game} color="#2e4857" width={256} />
        ))}
      </Container>
      <MainFooter pages={pages} />
    </div>
  )
}

export default App
