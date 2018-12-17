import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import Lobby from './Lobby';
import Game from './Game';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="body-container">
          <Switch>
            <Route exact path="/main" render={() => { console.log('Redirecting to main/profile'); return <Redirect to="/main/profile" /> }} />
            <Route path="/main/profile" render={() => { return <Profile /> }} />
            <Route path="/main/lobby" render={() => { return <Lobby /> }} />
            <Route path="/main/rules" render={() => { return <div>Route: /main/rules</div> }} />
            <Route path="/main/game" render={() => { return <Game />}} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
