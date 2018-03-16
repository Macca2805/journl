import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    return fetch('https://content.thewest.com.au/publication?kind=article&page_size=12')
      .then(response => response.json())
      .then(json => {
        const articles = json.documents;
        this.setState((prevState) => ({ articles }));
      });
  }
  render() {
    const { articles } = this.state;
    return (
      <div className='articles-list-container'>
        <div className='articles-list'>
          {
            articles &&
            articles.map((a, i) => {
              return (
                <div
                  key={i}
                  className='articles-list-item'>
                  <a 
                    className='article'
                    href='#article'
                    style={{ backgroundImage: `url(${a.mainImage.reference})` }}>
                    <div className='head-kicker'>{a.headKicker}</div>
                    <h1>{a.heading}</h1>
                  </a>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Home;