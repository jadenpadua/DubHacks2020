import React from 'react';

import './style.less';
import logo from '../../assets/logo.png';
import auth_background from '../../assets/auth_background.png';
import heart from '../../assets/heart.png';

const AuthPage = (props) => {
  return (
    <div className="auth-page">
      <img className="logo" src={logo}/>
      <img src={auth_background} className="background"/>
      <img src={heart} className="heart"/>
      {props.children}
    </div>
  );
}

export default AuthPage;