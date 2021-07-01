import React, { useState } from 'react'
import './Menu.css' ;


function Menu({ setNavOpen , navOpen }) {
    return (
        <button className={`menu ${navOpen && 'opened' }`} onClick={() => setNavOpen(!navOpen ) } aria-label="Main Menu">
          <svg width="58" height="37" viewBox="0 0 58 37" fill="transparent" xmlns="http://www.w3.org/2000/svg">
            <line x1="17" y1="29.25" x2="52" y2="29.25" stroke="white" stroke-width="1.5"/>
            <line x1="17" y1="19.25" x2="52" y2="19.25" stroke="white" stroke-width="1.5"/>
            <line x1="17" y1="9.25" x2="52" y2="9.25" stroke="white" stroke-width="1.5"/>
          </svg>
        </button>
    )
}

export default Menu ;
