import React from "react"
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
          <Route path={`${process.env.REACT_APP_BASE_URL}/*`} element={<Games />} />
          <Route
            path="*"
            element={<Navigate to={`${process.env.REACT_APP_BASE_URL}/`} replace />}
          />
        </Routes>
        <MainFooter pages={pages} />
      </BrowserRouter>
    </div>
  )
}

export default App
