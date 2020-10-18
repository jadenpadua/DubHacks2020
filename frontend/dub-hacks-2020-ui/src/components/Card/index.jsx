import React, { useState, useEffect, useContext } from 'react';
import { Card as AntdCard } from 'antd';
import { Progress } from 'antd'
import locationsvg from './location.svg';
import {ClockCircleOutlined, SmileOutlined} from '@ant-design/icons'
import './index.less';
import axios from 'axios';
import UserContext from '../../UserContext';
import OrderContext from '../../OrderContext';
import { useHistory } from 'react-router-dom';

const Card = ({buyin, image, title, location, orderDeadline, buyinMin, price, unit, type, description, item_id, updateOrders, updateHosts}) => {
  const {user} = useContext(UserContext);
  const {order, setOrder} = useContext(OrderContext);
  const history = useHistory();
  const purchase = () => {
    if (type === 'host') {
      setOrder({title, image, price,current:buyin, goal: buyinMin,description: description});
      // axios.post("http://127.01:8000/api/create_order/" + user.email, {
      //   item_id: item_id,
      // }).then(() =>{ 
      //   updateHosts();
      // })
      history.push("/buy")
    } else if (type === 'purchase') {
      // axios.post("http://127.01:8000/api/users/" + user.email + "/purchases/", {
      //   host_user: user.email,
      //   item_id: item_id,
      //   amount: 1,
      //   longitude: 0,
      //   latitude: 0,
      // }).then(() => {
      //   updateOrders();
      // })
      setOrder({title, image, price,current:buyin, goal: buyinMin,description: description, item_id:item_id});
      history.push("/buy")
    }
  }
  return (
    <div className="Card">
      <AntdCard className="card">
        <img className="cover-img" src={image} />
        <div className="price">
          ${price.toFixed(2)}
        </div>
        <div className="meta">
          <h1>{title}</h1>
          <div style={{marginBottom: "8px"}}><span className="location"><img className="location-svg" src={locationsvg}/> {location}</span> <span>| 1.6 miles away</span></div>
          {type === 'purchase' && <div className="end-date"><ClockCircleOutlined /> Ends on {orderDeadline}</div>}
          {type === 'purchase' ? <p>{buyin}/{buyinMin} Buy-ins</p> : <p><SmileOutlined /> Requires {buyinMin} Buy-ins</p>}
          {type === 'purchase' && <div className="progress">
            <Progress percent={Math.min((buyin / buyinMin) * 100, 100)}/>
          </div>}
          {type === 'host' && <p className="desc"><span className="dollar">$</span> {description}</p>}
          <div className={type === 'purchase' ? "cta-button" : "cta-button host"} onClick={purchase}>
            {type === 'purchase' ? 'Purchase Now' : 'Host now'}
          </div>
        </div>
      </AntdCard>
    </div>
  )
}

export default Card
