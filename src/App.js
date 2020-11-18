import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';
import displayShowDetailsContainer from './Container/displayShowDetailsContainer';
import ShowContainer from './Container/showContainer';
class App extends Component {
  render() {
    return (
 
    <HashRouter>
    <Switch>
    <Route path="/" exact component={ShowContainer} />
    <Route path="/showdetails" exact component={displayShowDetailsContainer} />
  </Switch>
  </HashRouter>
  );
    }
}

export default App;


