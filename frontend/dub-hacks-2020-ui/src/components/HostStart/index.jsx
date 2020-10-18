import React, { useContext, useState } from 'react';

import './style.less';

import auth_background from '../../assets/auth_background.png';
import smiley from '../../assets/smiley.svg';
import dollar from '../../assets/dollar.svg';
import redeem from '../../assets/redeem.svg';
import ItemContext from '../../ItemContext';
import UserContext from '../../UserContext';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ThankYouModal from '../ThankYouModal';

const HostStart = (props) => {
  const {item} = useContext(ItemContext);
  const {user} = useContext(UserContext);
  const history = useHistory();
  const [visible, setVisible] = useState( false )
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
      setVisible(false);
    };

  const makeHost = () => {
    axios.post("http://127.01:8000/api/create_order/" + user.email, {
        item_id: item.item_id,
      }).then(() =>{ 
        // updateHosts();
        showModal();
      })
  }
  return (
    <div className="host-start">
      <ThankYouModal handleCancel={handleCancel} showModal={showModal} visible={visible}/>
      <div className="image-container">
        <div className="price">${item.price}</div>
        <img className="item-image" src={item.image}/>
      </div>
      <div className="container">
        <div className="store-name">{item.title}</div>
        <div className="website-link">Visit Giovanna's website</div>
        <span className="dollar"><img src={dollar}/><div>{item.reward_desc}</div></span>
        <span className="smiley"><img src={smiley}/><div>Requires 23 buy-ins</div></span>
        <div className="description">Giovanna's Cranberries are home to the most aromatic and savory cranberries!</div>
        <span className="redeem"><img src={redeem}/><div>Helps support Giovanna's mother (Read more)</div></span>
        <div className="button" onClick={makeHost}>Host Now</div>
      </div>
    </div>
  );
};

export default HostStart;
