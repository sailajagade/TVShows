import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import ShowContainer from './Containers/ShowContainer';
import './App.css';
import DisplayShows from './Components/DisplayShows';
import DisplayShowDetails from './Components/DisplayShowDetails';
import DisplayShowDetailsContainer from './Containers/DisplayShowDetailsContainer';
import EpisodesComponent from './Components/Tabs/EpisodesComponent';
class App extends Component {
  render() {
    return ( 
    <HashRouter>
    <Switch>
    <Route path="/" exact component={ShowContainer} />
    <Route path="/showdetails" exact component={DisplayShowDetailsContainer} />
    <Route path="/Episode" exact component={EpisodesComponent} />
  </Switch>
  </HashRouter>
  );
    }
}

export default App;


