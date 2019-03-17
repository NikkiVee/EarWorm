import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Songs from './Songs/Songs';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>

          <Route exact path="/" component={Home} />

          <Route path="/allSongs" component={Songs} />

          </Switch>
      </div>
    );
  }
}

export default App;
