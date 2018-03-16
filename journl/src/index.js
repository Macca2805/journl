import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Home from './Home';
import Article from './Article';
import Footer from './Footer';
import { BrowserRouter as Router  , Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router>
    <div className='app'>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/article/:id" component={Article} />
      <Footer />
    </div>
  </Router>
, document.getElementById('root'));
