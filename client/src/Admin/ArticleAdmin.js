import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArticleAdminMenu from './ArticleAdminMenu.js';
import AddArticle from './AddArticle';
import UpdateArticle from './UpdateArticle';
import RemoveArticle from './RemoveArticle';

export default class ArticleAdmin extends Component {

  render() {
    return (
      <div>
        <div className="titleAdmin"> <p className="titlep">Articles</p>
        </div>
        <header className="block">
          <Router>
            <ArticleAdminMenu />
            <Route exact path='/' component={AddArticle} />
            <Route path='/update' component={UpdateArticle} />
            <Route path='/remove' component={RemoveArticle} />
          </Router>
          {/*   <div className="profile-menu">
              <p>Me <a href="#26"><span className="entypo-down-open scnd-font-color"></span></a></p>
              <div className="profile-picture small-profile-picture">
                  <img width="40px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"/>
              </div>
          </div> */}
        </header>
      </div>
    );
  }
}