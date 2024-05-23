import React, { useEffect, useState } from 'react';
import '../sass/layout/nav.scss'
import { Link, useLocation } from 'react-router-dom';




function Nav() {

  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation()

  const handleShowLinks = ()=>{
    setShowLinks(!showLinks)
  }

  const closeNav = () => {
    if (showLinks) {
      setShowLinks(false);
    }
  };

  useEffect(() => {
      const targetSection = location.hash.substring(1);
      if (location.pathname === '/Portfolio-Marc-Olivier/' && location.hash) {
        scrollToSection(targetSection);
        closeNav();
      }
    }, [location]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <header className={`nav ${showLinks? "show-nav" : "hide-nav"}`}>
     <a href='/Portfolio-Marc-Olivier/' className='nav__logo'>Marc-Olivier Perrois</a>  
      <ul className='nav__links'>
         <li className="nav__item">
          <Link to="/Portfolio-Marc-Olivier/#accueil" className="nav__link" onClick={closeNav}>
            ACCUEIL
          </Link>
        </li>
          <li className="nav__item">
          <Link to="/Portfolio-Marc-Olivier/#works" className="nav__link" onClick={closeNav}>
            PORTFOLIO
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Portfolio-Marc-Olivier/#about" className="nav__link" onClick={closeNav}>
            A PROPOS
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Portfolio-Marc-Olivier/#contact" className="nav__link" onClick={closeNav}>
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