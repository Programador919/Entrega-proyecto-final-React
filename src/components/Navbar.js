import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'



const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="li"><h1>DRINK HOUSE PRODUCTOS</h1></Link>
        <ul className="menu">
          <li><Link className="menu-link" to="/registro">Registrese en DrinHouse</Link></li>
            <li><Link className="menu-link" to="/productos/whisky">Whisky</Link></li>
            <li><Link className="menu-link" to="/productos/tequila">Tequila</Link></li>
            <li><Link className="menu-link" to="/productos/vodka">Vodka</Link></li>
            <li><Link className="menu-link" to="/productos/vino">Vino</Link></li>
            
            
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar