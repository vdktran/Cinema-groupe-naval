import React, { Component } from 'react';

export default class SendNewsletter extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div className="containerMenu">
          <h1 className="titleCompo">Envoyer un mail à tout mes clients</h1>
          <form>
            <label>Objet du mail</label>
            <input id="newsletterObjet" type="text" />

            <label> Contenu du mail</label>
            <input id="newsletterContenu" type="textarea" />

            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    );
  }
}