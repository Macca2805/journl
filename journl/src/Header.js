import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
          <div className='header-container'>
            <Link to='/'>Journl News Network</Link> 
          </div>
      </header>
    );
  }
}

export default Header;