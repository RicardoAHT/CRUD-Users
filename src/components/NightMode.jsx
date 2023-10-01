import React from 'react'
import ReactSwitch from 'react-switch'
import "./styles/NightMode.css"

const NightMode = ({nightMode, handleNightMode}) => {
  return (
  <label className='nightSwitch' htmlFor="material-switch">
    <i className={`fa-solid fa-sun sun ${nightMode && "sun__night"}`}></i>
    <ReactSwitch
      checked={nightMode}
      onChange={handleNightMode}
      onColor="#86d3ff"
      onHandleColor="#2693e6"
      handleDiameter={20}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={40}
      className="react-switch"
      id="material-switch"
    />
    <i className={`fa-solid fa-moon moon ${nightMode && "moon__night"}`}></i>
  </label>
  )
}

export default NightMode