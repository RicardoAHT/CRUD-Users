import React from 'react'
import NightMode from './NightMode'

const NavBar = ({setCloseForm, nightMode, setNightMode, handleNightMode}) => {

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
    <nav className={`navBar ${nightMode && "navBar__night"}`} >
       <h1 className={`navBar__h1 ${nightMode && "navBar__h1__night"}`}>Users Crud <br /> APP</h1>
        <button className={`open__form ${nightMode && "open__form__night"}`} onClick={handleOpenForm}>
            <i className="fa-solid fa-user open__form__icon"></i> <p>Add User</p>
        </button>
        <NightMode
            nightMode={nightMode}
            setNightMode={setNightMode}
            handleNightMode={handleNightMode}
        />
    </nav>
  )
}

export default NavBar
