import React from 'react'
import Navlist from './Navlist';
import Logo from './Logo';
import Time from './Time';
const Nav = () => {
  return (
    <div className='navbar'>
      <Logo/>
      <Navlist/>
      <Time/>
    </div>
  )
}

export default Nav
