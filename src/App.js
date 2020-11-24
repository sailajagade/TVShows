import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import ShowContainer from './Containers/ShowContainer';
import './App.css';
import DisplayShows from './Components/DisplayShows';
import DisplayShowDetails from './Components/DisplayShowDetails';
import DisplayShowDetailsContainer from './Containers/DisplayShowDetailsContainer';
import EpisodesComponent from './Components/Tabs/EpisodesComponent';
import SearchComponent from './Components/SearchComponent';
class App extends Component {
  render() {
    return ( 
    <HashRouter>
      <SearchComponent/>
    <Switch>
  
    <Route path="/" exact component={ShowContainer} />
    <Route path="/showdetails" exact component={DisplayShowDetailsContainer} />
    <Route path="/Episode" exact component={EpisodesComponent} />
    <Route path="/displayShows" exact component={DisplayShows} />
  </Switch>
  </HashRouter>
  );
    }
}

export default App;


