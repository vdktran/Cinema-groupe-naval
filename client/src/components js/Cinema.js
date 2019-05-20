import React, {Component} from 'react';
import './Cinema.css';
import photoCinema from './img/salle_cine_presentation.jpeg';
import photoCine1 from './img/photocine1.jpg';
import photoCine2 from './img/photocine2.jpg';
import photoCine3 from './img/photocine3.jpeg';

class Cinema extends Component {

  render() {
    return (
      <div className="pageCinema">

        <div><img id="photoCinema" src={photoCinema} alt="photo salle cinema Tchi Tcha"/>
        </div>
        <h1 id="titleCine">Le Tchi Tcha</h1>

          <div id="main">
            <div id="partie1">
              <img id="photoCine1" src={photoCine1} alt=""/>
              <h3 id="titleStory">Une histoire plus ancienne que celle du cinéma</h3>
              <p id="aboutText">En cette fin du 19ème siècle, au pied de la butte Montmartre, à deux pas de la place de Clichy, le cabaret du Père LATHUILLE bat son plein. Ce lieu accueille de grands artistes, dont le peintre Edouard MANET, qui s’en inspire pour réaliser en 1879 une huile sur toile : Chez le Père LATHUILLE. Après plusieurs changements de direction artistique, le cabaret est rebaptisé en 1906 LE KURSAAL et devient un café-concert renommé qui fait concurrence à l’EUROPEEN. Du cabaret-guinguette s'élèvent les voix des plus grands interprètes de l’époque : Maurice CHEVALLIER, Lucienne BOYER ...</p>
            </div>
            <div id="partie2">
              <img id="photoCine2" src={photoCine2} alt=""/>
              <p id="aboutText">Au cours des années 30, il se transforme en cinéma et prend le nom de l’EDEN. Il propose une programmation d’actualités cinématographiques mondiales, en français et en anglais. Ces ancêtres de notre journal télévisé, très suivis, faisaient partie intégrante de séances de cinéma longues de plusieurs heures. A la fin des années 30, les directeurs de l’EUROPEEN reprennent l’EDEN qu’ils rebaptisent LES MIRAGES. Grâce à des travaux de rénovation, ils en feront une des plus belles salles de cinéma de quartier parisiennes. Les structures métalliques datant d’Eiffel sont cachées par des colonnes et la scène est supprimée à l’aide d’un grand rideau blanc donnant l’impression que les mûrs latéraux se prolongent en écran.</p>
            </div>
            <div id="partie3">
              <img id="photoCine3" src={photoCine3} alt=""/>
              <p id="aboutText">Après la Seconde Guerre Mondiale, LES MIRAGES sont laissés à l’abandon. Il faudra attendre 1973 pour que Jean TOURAINE, employé par la société Pathé redessine le cinéma en un complexe de trois salles. Celui-ci, rattaché au SELECT PATHE, est alors connu sous le nom de PATHE CLICHY, jusqu’en 1994. En 1996, avec le soutien du CENTRE NATIONAL DE LA CINEMATOGRAPHIE et de la MAIRIE DE PARIS, L’ARP rénove, avec les architectes Yves Lesprit et Tina Trigala du cabinet LESPRIT, entièrement ce lieu qui devient LE CINEMA TCHI TCHA. Inauguré par sa marraine, Fanny ARDANT, ses salles se développent peu à peu comme une vitrine parisienne du cinéma européen et mondial et deviennent un espace de rencontres, de festivals, de rétrospectives, d’avant-premières, de programmes de documentaires et de courts métrages, de soirées spéciales, de cartes blanches à des réalisateurs…</p>
            </div>
          </div>
    </div>
    );
  }
}

export default Cinema;