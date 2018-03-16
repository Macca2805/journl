import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
// import Article from './Article';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        {/* <Article id='B88776101Z' /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
