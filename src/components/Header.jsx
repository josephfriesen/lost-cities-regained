import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <div className="flexbox-columns header-container">

      <div className="nav-item logo">Logo</div>
      <div className="nav-item nav-button"><Link to='/main/profile'>Profile</Link></div>
      <div className="nav-item nav-button"><Link to='/main/lobby'>Game Lobby</Link></div>
      <div className="nav-item nav-button"><Link to='/main/rules'>Rules</Link></div>
      <div className="nav-item nav-button">LOG OUT</div>
    </div>
  );
}
