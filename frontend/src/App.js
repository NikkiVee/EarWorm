import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>

          <Route exact path="/" component={Home} />

          </Switch>
      </div>
    );
  }
}

export default App;
