import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/game.css';

export default class PlayArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props.color);
  }

  render() {
    return (
      <div className={"display--card discard--" + this.props.color}>
        Play Area {this.props.color}

      </div>
    )
  }
}

PlayArea.propTypes = {
  color: PropTypes.string
}
