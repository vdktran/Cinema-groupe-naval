import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class TabContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        films: [],
        whatday : 'Lundi'
      };
    }

    componentDidMount() {
        fetch('/films/filmsoftheday/'+this.state.whatday)
          .then(res => res.json())
          .then(films => this.setState({ films }));
      }

    render() {

        // seancesData = (seancesData) => {
    
        // }
    
        return (
            <div className="Seances_gallery">
            {this.state.films.map(film =>
              <div key={film.film_id} className="Seances_card">
                <img key={film.film_id} src={film.img_affiche}></img>
                <div className="Seances_wrapper">
                  <div className="Seances_title">{film.titre}</div>
                  <Seances whatseance={film.film_id}></Seances>
                </div>
              </div>
            )}
            </div>
        );
      }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item On" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer></TabContainer>}
      {value === 1 && <TabContainer></TabContainer>}
      {value === 2 && <TabContainer></TabContainer>}
    </div>
  );
}

export default SimpleTabs;