import React, { Component } from 'react';
import AddArticlePopup from './AddArticlePopup.js';

export default class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    fetch('/article')
      .then(res => res.json())
      .then(articles => this.setState({ articles }));
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <div className="containerMenu">
          <h1 className="titleCompo"> Tout les articles : </h1>
          <div className="ListFilmAdmin scrollbar" id="style-1">
            {this.state.articles.map(art =>
              <div key={art.article_id} className="DataListFilmAdmin"><p> {art.article_title} {art.auteur} {art.article_date}</p></div>
            )}
          </div>
          <button className="btn green rounded" onClick={this.togglePopup.bind(this)}> Ajouter </button>
          {this.state.showPopup ?
            <AddArticlePopup
              text='Ajouter un article'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      </div>
    );
  }
}