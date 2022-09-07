import React, { useState } from "react"
import "./SwitchFilter.css"

const SwitchFilter = () => {
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

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
