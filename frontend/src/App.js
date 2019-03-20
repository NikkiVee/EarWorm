import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Songs from './Songs/Songs';
import ByPop from './Pop/ByPop';
import Genres from './Gen/Genres';

class App extends Component {
  // consolidating the song routes into one gives you the ability to pass props between them - not required, just a thought
  render() {
    return (
      <div className="App">
          <Switch>

          <Route exact path="/" component={Home} />

          <Route path="/allSongs" component={Songs} />

          <Route path="/byPopularity" component={ByPop}/>

          <Route path="/byGenre" component={Genres}/>

          </Switch>
      </div>
    );
  }
}

export default App;
