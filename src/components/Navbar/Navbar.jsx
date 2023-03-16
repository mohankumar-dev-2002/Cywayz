import React from 'react';
import logo from '../../assests/images/logo.svg';
import './navbar.css'
const Menu =()=> <>
<a href="#home">Community</a>
<a href="#home">Terms and conditions </a>
<a href="#home"> Become an mentor</a>
</> 
const Navbar = () => {
 
  return (
    <div className='nav w-16 md:w-32 lg:w-48'>
      <div className='navbar-container'>
      <a href='#home'><img src={logo} alt="logo" /></a>
        <div className='navbar-links'>
          <Menu/>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar