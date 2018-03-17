import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Home from './Home';
import Article from './Article';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <div className='app'>
      <Header />
      <Route key="home" exact path="/journl/" component={Home} />
      <Route key="article" path="/journl/article/:id" component={Article} />
      <Footer />
    </div>
  </Router>
  , document.getElementById('root'));
