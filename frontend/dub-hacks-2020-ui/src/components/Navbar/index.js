import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.less';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.png';
import profilepic from '../../assets/stanley-pic.png';
import { Input } from 'antd';

const { Search } = Input;

const Navbar = () => {
  return (
    <nav className="navbar">
        <img className="logo" src={logo} />
        <div className="search-bar">
        <Search placeholder="Search for your favorite items" onSearch={value => console.log(value)} enterButton />
        </div>
        <div className="profile"><Avatar icon={<UserOutlined />} icon src={profilepic} /></div>
    </nav>

  )
}

export default Navbar;
