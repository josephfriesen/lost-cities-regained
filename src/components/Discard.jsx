import React from 'react';
import '../styles/css/game.css';

export default class Discard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props.color);
  }

  render() {
    return (
      <div className={"discard--pile discard--" + this.props.color}>
        Discard {this.props.color}
      </div>
    )
  }
}
