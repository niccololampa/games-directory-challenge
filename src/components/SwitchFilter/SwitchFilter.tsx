import React from "react"
import "./SwitchFilter.css"

const SwitchFilter = ({ handleCheck }: { checked: boolean; handleCheck: () => void }) => {
  return (
    <div>
      <label className="switch-filter">
        <input type="checkbox" onChange={handleCheck} />
        <span className="slider-filter"></span>
      </label>
    </div>
  )
}

export default SwitchFilter
