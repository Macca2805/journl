import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Home from './Home';
import Article from './Article';
import Footer from './Footer';
import { BrowserRouter as Router  , Route } from 'react-router-dom';
import './index.css';
import Redirect from 'react-router-dom/Redirect';

ReactDOM.render(
  <Router>
    <div className='app'>
      <Header />
      <Route exact path="/journl" component={Home} />
      <Route path="/journl/article/:id" component={Article} />
      <Route exact path="/">
        <Redirect to="/journl" />
      </Route>
      <Footer />
    </div>
  </Router>
, document.getElementById('root'));
