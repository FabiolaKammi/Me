import React from 'react';
import Logo from '../utils/Logo.jpg';

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='logo-div'>
      <img src={Logo} alt='personnal-logo' style={{width:'40px', height:'40px'}}/>
      <span>Your Futur SWE</span>
      </div>
        <ul>
            <li>About</li>
            <li>Prices</li>
            <li>Services</li>
        </ul>
    </nav>
  )
}

export default Header;
