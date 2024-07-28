import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';

function Navbar() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to='main' smooth={true} duration={500} className='logo'>
        <img src={logo} alt="Logo" />
      </Link>
      <input type="checkbox" className='menu-btn' id='menu-btn' />
      <label htmlFor="menu-btn" className='menu-icon'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to="main" smooth={true} duration={200}>Header</Link></li>
        <li><Link to="features" smooth={true} duration={200}>Features</Link></li>
        <li><Link to="offer" smooth={true} duration={200}>Offers</Link></li>
        <li><Link to="about" smooth={true} duration={200}>About</Link></li>
        <li><Link to="contact" smooth={true} duration={200}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;