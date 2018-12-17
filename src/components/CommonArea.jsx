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
      <div className="commonarea">
        <div className="drawdeck--container">
          <Drawdeck />
        </div>
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
      </div>
    )
  }
}
