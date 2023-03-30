import React from 'react'
import  logo from "../../logo.png"
import {Link} from "react-router-dom";
import {ImSearch} from "react-icons/im";
const Header = () => {
    // console.log(logo)
  return (
    <nav className="header">

<img src={logo} alt="netflix" />

<div>
    <Link to="/tvshows">T Shows</Link>
    <Link to="/tvshows">T Shows</Link>
    <Link to="/tvshows">T Shows</Link>
    <Link to="/tvshows">T Shows</Link>

</div>

<ImSearch/>
    </nav>
  )
}

export default Header;