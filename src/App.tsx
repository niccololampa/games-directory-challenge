import React from "react"
import "./App.css"

import { NavigationBar, SearchBox, SelectDropDown, SwitchFilter } from "./components"

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <SearchBox />
      <SelectDropDown category="genre" />
      <SwitchFilter />
    </div>
  )
}

export default App
