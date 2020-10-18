import React from 'react';
import 'antd/dist/antd.css';
import './style.less';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.svg';
import profilepic from '../../assets/stanley-pic.png';
import { Input } from 'antd';
import {NavLink} from 'react-router-dom';

const { Search } = Input;

const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to="/dashboard">
          <div className="nav-container">
            <img className="logo" src={logo} />
          </div>
        </NavLink>
        <div className="search-bar">
        <Search placeholder="Search for your favorite items" onSearch={value => console.log(value)} enterButton />
        </div>
        <div className="profile"><img src={profilepic} alt=""/></div>
    </nav>

  )
}

export default Navbar;

