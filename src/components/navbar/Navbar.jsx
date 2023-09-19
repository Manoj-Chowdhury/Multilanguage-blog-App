import React from 'react'
import '../navbar/Navbar.css'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../hamburger/HamburgerMenu'


const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#474545', color: '#fff' }}>
            <p><Link to='/'>Multilanguage Blog App</Link></p>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <HamburgerMenu />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar