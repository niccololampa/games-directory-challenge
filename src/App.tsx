import React from "react"
import "./App.css"

import { NavigationBar, SearchBox, SelectDropDown } from "./components"

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <SearchBox />
      <SelectDropDown category="genre" />
    </div>
  )
}

export default App
