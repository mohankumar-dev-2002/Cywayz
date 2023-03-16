import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='parent-top-container'>
        <div className='footer-inner-top'>
          <h1>Subscribe to our news letter to <br /> get latest updates and news</h1>
          <form action='#'>
            <input type='email' placeholder='Enter Your Email'></input>
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='mid-container'>
        <div className='mid-container-col1'>
          <h3>Headquarter </h3>
          <h4>#107, Celebrity Srivasine's Complex,<br />3rd cross, Doddathogur, <br />Electronicity phase 1,<br />
            Bengaluru, <br />Karnataka, 560100.</h4>
        </div>
        <div className='mid-container-col2'>
          <h3>Contact info</h3>
          <h4>+91 9047431100</h4>
          <h4>info@cywayz.com</h4>
        </div>
        <div className='mid-container-col3'>
          <h3>Quick links</h3>
          <h4>About us</h4>
          <h4> Contact us</h4>
          <h4>Sign in</h4>
          <h4>Terms & conditions</h4>
          <h4> Refund policy</h4>
        </div>
      </div>
      <div className='footer-footer'>
        <h5>Copyright @ 2021 Cywayz CXO</h5>
      </div>
    </div>

  )
}

export default Footer