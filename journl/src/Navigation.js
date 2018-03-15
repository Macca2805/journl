import React, { Component } from 'react';
import './Navigation.css'

class Navigation extends Component {
  render () {
    return (
      <nav>
        <ul>
          <li><a href='#localnews'>Local News</a></li>
          <li><a href='#worldnews'>World News</a></li>
          <li><a href='#sport'>Sport</a></li>
          <li><a href='#entertainment'>Entertainment</a></li>
          <li><a href='#food'>Food</a></li>
          <li><a href='#technology'>Technology</a></li>
        </ul>
      </nav>
    );
  }    
}

export default Navigation;