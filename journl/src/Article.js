import React, { Component } from 'react';
import './Article.css'

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    return fetch(`https://content.thewest.com.au/publication/${id}`)
      .then(response => response.json())
      .then(json => {
        const title = json.items.find(i => i.kind === 'heading').text;
        const byline = json.items.find(i => i.kind === 'byline')
          && json.items.find(i => i.kind === 'byline').text;
        const mainImageName = json.items.find(i => i.kind === 'main-image').name;
        const headerImage = json.assets.find(i => i.name === mainImageName).original.reference;
        const content = json.items.find(i => i.kind === 'content').blocks;
        this.setState((prevState) => ({ title, byline, headerImage, content }));
      });
  }
  render () {
    const { title, byline, headerImage, content } = this.state;
    return (
      <article>
        <h1>{title}</h1>
        <p className='article-byline'>{byline}</p>
        <img src={headerImage}  alt='article'/>
        {
          content &&
          content.map((c, i) => {
            switch(c.kind) {
              case 'text':
                return <p key={i}>{c.text}</p>;
              default:
                return null;
            }
          })
        }
      </article>
    );
  }    
}

export default Article;