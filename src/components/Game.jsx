import React from 'react';
import Opponent from './Opponent';
import CommonArea from './CommonArea';
import Tableau from './Tableau.jsx';
import UserHand from './UserHand';
import UserInfoPanel from './UserInfoPanel';
import '../styles/css/game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="game">
        <div className="opponent--row">
          <div className="opponenthand--container">
            <Opponent />
          </div>
          <div className="opponentinfo--container">
            <UserInfoPanel />
          </div>
        </div>
        <div className="commonarea--container">
          <CommonArea />
        </div>
        <div className="tableau--container">
          <Tableau />
        </div>
        <div className="user--row">
          <div className="userhand--container">
            <UserHand />
          </div>
          <div className="userinfo--container">
            <UserInfoPanel />
          </div>
        </div>
      </div>
    )
  }
}
