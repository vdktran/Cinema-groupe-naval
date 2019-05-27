import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    fetch('/article')
      .then(res => res.json())
      .then(articles => this.setState({ articles }));
  }

  render() {
    return (
      <div className="Home">
        {this.state.articles.map(function (article) {
          return (
            <div key={article.article_id}>
              <h1 id="titleArticle" key={article.article_title}>{article.article_title}</h1>
              <img id="imageArticle" key={article.article_id} src={article.article_img}></img>
              <p id="pArticle" key={article.article_text}>{article.article_text}</p>
            </div>
          );
        })}
      </div>

    );
  }
}

export default Home;