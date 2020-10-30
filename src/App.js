import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Container from './Container/showContainer';
class App extends Component {
  render() {
    return (
      <React.Fragment>
    <BrowserRouter>
    <Switch>
    <Route path="/" component={Container} exact />
  </Switch>
  </BrowserRouter>
  </React.Fragment>
  );
    }
}

export default App;


