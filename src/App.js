import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import ShowContainer from './Containers/ShowContainer';
import './App.css';
import DisplayShows from './Components/DisplayShows';
import DisplayShowDetailsContainer from './Containers/DisplayShowDetailsContainer';
import EpisodesComponent from './Components/Tabs/EpisodesComponent';
import SearchComponent from './Components/SearchComponent';
import NotFound from './Components/NotFound';
class App extends Component {
  render() {
   
    return ( 
    <HashRouter>
      <div >
      <SearchComponent/>
    <Switch>
  
    <Route path="/" exact component={ShowContainer} />
    <Route path="/showdetails/:searchvalue" exact component={DisplayShowDetailsContainer} />
    <Route path="/Episode" exact component={EpisodesComponent} />
    <Route path="/displayShows/:searchvalue" exact component={DisplayShows} />
    <Route component={NotFound}/>
  </Switch>
  </div>
  </HashRouter>
  );
    }
}

export default App;


