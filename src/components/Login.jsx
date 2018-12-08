import React from 'react';
import Footer from './Footer';

export default function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="button">Login</button>
      </form>
      <Footer />
    </div>
  )
}
