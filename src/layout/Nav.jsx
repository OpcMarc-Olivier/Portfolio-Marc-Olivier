import React, { useEffect, useState } from 'react';
import '../sass/layout/nav.scss'
import { Link } from 'react-router-dom';




function Nav() {

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = ()=>{
    setShowLinks(!showLinks)
  }

  return (
    <header className={`nav ${showLinks? "show-nav" : "hide-nav"}`}>
     <a href='/Portfolio-Marc-Olivier/' className='nav__logo'>Marc-Olivier Perrois</a>  
      <ul className='nav__links'>
         <li className="nav__item">
          <Link
            to="/Portfolio-Marc-Olivier/#accueil"
            className="nav__link"
            
          >
            ACCUEIL
          </Link>
        </li>
          <li className="nav__item">
          <Link
            to="/Portfolio-Marc-Olivier/#works"
            className="nav__link"
           
          >
            PORTFOLIO
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/Portfolio-Marc-Olivier/#about"
            className="nav__link"
            
          >
            A PROPOS
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/Portfolio-Marc-Olivier/#contact"
            className="nav__link"
            
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <button className='nav__burger' onClick={handleShowLinks}>
        <span className='burger-bar'></span>
      </button>
    </header>
  )
}

export default Nav