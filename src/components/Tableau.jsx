import React from 'react';
import PlayArea from './PlayArea'
import '../styles/css/game.css';

export default class Tableau extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="cardtableau--container">
        <div className="cardtableau--header">
          <h3> Player Tableau </h3>
        </div>
        <div className="player-tableau">
          <div className="playarea--container">
            <PlayArea
              color="red"/>
          </div>
          <div className="playarea--container">
            <PlayArea
              color="green"/>
          </div>
          <div className="playarea--container">
            <PlayArea
              color="white"/>
          </div>
          <div className="playarea--container">
            <PlayArea
              color="blue"/>
          </div>
          <div className="playarea--container">
            <PlayArea
              color="yellow"/>
          </div>
          <div className="tableau--round-score-display">
            Round Score
          </div>
        </div>
      </div>
    )
  }
}
