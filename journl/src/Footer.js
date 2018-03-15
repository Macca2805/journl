import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='footer-column'>
          <div className='footer-brand'>JNN</div>
        </div>
        <div className='footer-column'>
          <ul>
            <li><a href='#facebook'>Facebook</a></li>
            <li><a href='#twitter'>Twitter</a></li>
            <li><a href='#instagram'>Instagram</a></li>
          </ul>
        </div>
        <div className='footer-column'>
          <ul>
            <li><a href='#contactus'>Contact Us</a></li>
            <li><a href='#aboutus'>About Us</a></li>
            <li><a href='#presskit'>Press Kit</a></li>
          </ul>
        </div>
        <div className='footer-column'>        
          <ul>
            <li><a href='#privarypolicy'>Privacy Policy</a></li>
            <li><a href='#termsandconditions'>Terms and Conditions</a></li>
            <li><a href='#disclaimer'>Disclaimer</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;