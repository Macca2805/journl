import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
// import Home from './Home';
import Article from './Article';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
