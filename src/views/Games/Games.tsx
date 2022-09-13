import React from "react"
import { Route, Routes } from "react-router-dom"
import GamesList from "./GamesList/GamesList"
import GameProfile from "./GameProfile/GameProfile"

const Games = () => {
  return (
    <Routes>
      <Route path="" element={<GamesList />} />
      <Route path=":gameId" element={<GameProfile />} />
    </Routes>
  )
}

export default Games
