import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.less';


const LoginForm = (props) => {

  return (
    <div className="login-form">
      <div>
        <h1>Welcome back to the Massit community! </h1>
        <hr/>
        <form>
          <h2>Email</h2>
          <input className="normal-input"/>
          <h2>Password</h2>
          <input className="normal-input"/>
          <div className="sign-in button">Sign In</div>
          <NavLink activeClassName="selected" to="/register">
            <div className="button">Sign Up</div>
          </NavLink>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;