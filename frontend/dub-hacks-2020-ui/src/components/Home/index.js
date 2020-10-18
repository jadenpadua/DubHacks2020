import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.less';

import cart from '../../assets/home_cart.png';
import computer from '../../assets/home_computer.png';
import logo from '../../assets/logo.png';
import person from '../../assets/home_person.png';

const Home = () => {
  return (
    <div className="home-page">
      <img className="logo" src={logo}/>
      <div className="content">
        <div className="description">
          <div className="rectangle"/>
          <p>
            Buy <i><b>cheap</b></i> and <i><b>local</b></i> goods at
          </p>
          <h1>Massit</h1>
          <NavLink activeClassName="selected" className="button" to="/register">
            <div className="blur">
            </div>
            <div className="start-button">
              Start here
            </div>
          </NavLink>
        </div>
        <div className="images">
          <div className="container">
            <img className="person" src={person}/>
            <img className="computer" src={computer}/>
            <img className="cart" src={cart}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;