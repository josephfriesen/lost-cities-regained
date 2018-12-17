import React from 'react';
import Drawdeck from './Drawdeck';
import Discard from './Discard';
import '../styles/css/game.css';

export default class CommonArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="cardtableau--container">
        <div className="cardtableau--header">
          <h3> Discard Piles </h3>
        </div>
        <div className="commonarea">
          <div className="discard--container">
            <Discard
              color="red"/>
          </div>
          <div className="discard--container">
            <Discard
              color="green"/>
          </div>
          <div className="discard--container">
            <Discard
              color="white"/>
          </div>
          <div className="discard--container">
            <Discard
              color="blue"/>
          </div>
          <div className="discard--container">
            <Discard
              color="yellow"/>
          </div>
          <div className="drawdeck--container">
            <Drawdeck />
          </div>
        </div>
      </div>
    )
  }
}
