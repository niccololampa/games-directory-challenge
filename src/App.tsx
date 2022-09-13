import React, { useState, useEffect } from "react"
import { SelectChangeEvent } from "@mui/material/Select"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Games } from "./views"
import { NavigationBar, MainFooter } from "./components"
import "./App.css"

function App() {
  const pages = ["games", "news", "allies", "badges", "whitepaper"]

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar pages={pages} />
        <Routes>
          <Route path="/games/*" element={<Games />} />
          <Route path="*" element={<Navigate to="/games" replace />} />
        </Routes>
        <MainFooter pages={pages} />
      </BrowserRouter>
    </div>
  )
}

export default App
