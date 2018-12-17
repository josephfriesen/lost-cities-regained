import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import GameHistory from './GameHistory';
import '../styles/css/profile.css';

export default function Profile(props) {
  return (
    <div className="profile--container main-window">
      <div>
        <UserInfo />
      </div>
      <div>
        <GameHistory />
      </div>
    </div>
  );
}

Profile.propTypes = {}
