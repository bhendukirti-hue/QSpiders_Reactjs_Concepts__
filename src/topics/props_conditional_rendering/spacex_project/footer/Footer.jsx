import React from 'react'
import Footer_logo from './Footer_logo';
import Footer_list from './Footer_list';
import Footer_copyright from './Footer_copyright';

const Footer = () => {
  return (
    <div className='footer'>
      <Footer_logo/>
      <Footer_list/>
      <Footer_copyright/>
    </div>
  )
}

export default Footer
