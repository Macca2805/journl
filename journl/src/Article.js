import React, { Component } from 'react';
import './Article.css'

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  componentWillMount() {
    const data = fetch("https://content.thewest.com.au/publication/B88776101Z")
      .then(response => response.json())
      .then(json => {
        const title = json.items.find(i => i.kind === 'heading').text;
        const content = json.items.find(i => i.kind === 'content').blocks;
        this.setState((prevState) => ({ title, content }));
      })
  }
  render () {
    const { title, content } = this.state;
    return (
      <article>
        <h1>{title}</h1>
        {
          content &&
          content.map((c, i) => {
            switch(c.kind) {
              case 'text':
                return <p>{c.text}</p>;
            };
          })
        }
      </article>
    );
  }    
}

export default Article;