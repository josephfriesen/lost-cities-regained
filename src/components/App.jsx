import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './Login';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/login' render={() => { return <Login /> }} />
          <Route path='/main' render={() => { return <Main /> }} />
        </Switch>
      </div>
    );
  }
}

export default App;
