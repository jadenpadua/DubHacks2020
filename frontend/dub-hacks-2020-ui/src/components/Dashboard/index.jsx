import React, { useState, useEffect } from 'react';
import Card from '../Card';
import bg from './bg.png';
import house from './house.png';
import { Card as AntdCard} from 'antd';
import {PlusOutlined} from '@ant-design/icons'
import search from './search.png';
import './index.less';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();
  const data = [
    {title: "Cranberries", buyin: 60, description: "abc", image:"https://images-prod.healthline.com/hlcmsresource/images/AN_images/cranberries-101-1296x728-feature.jpg", location:"San Gabriel, CA", orderDeadline: "10/18/20", buyinMin: 66, price: 1.20, unit:'oz', type:'purchase'},
    {title: "Cranberries", buyin: 110, description: "abc", image:"https://images-prod.healthline.com/hlcmsresource/images/AN_images/cranberries-101-1296x728-feature.jpg", location:"San Gabriel, CA", orderDeadline: "10/18/20", buyinMin: 66, price: 1.20, unit:'oz', type:'purchase'}
  ]
  const host_data = [
    {title: "Pizzas", description: "Get a free $25 gift card", image:"https://assets.bonappetit.com/photos/5aaff25c6ed79626bc262ee1/16:9/w_2560%2Cc_limit/pizza-slice-opener-pepperoni-cheese.jpg", location:"San Gabriel, CA", orderDeadline: "10/20/20", buyinMin: 23, price: 3.20, unit:'slices', type:'host'}
  ]
  return (
    <div className="Dashboard">
      <div className="backdrop-wrapper">
        <img style={{width: "100vw"}}src={bg}/>
      </div>
      <div className="container">
        <h1><span className="header">Buy Now</span> | Contribute to mass buys from local stores</h1>
        <div className="purchase-cards">
          <img className="search" src={search} style={{width: "270px",
    marginLeft: "-63px"}}/>
          {data.map((info) => {
            return <Card {...info} />
          })}
        </div>
        <br />
        <h1><span className="header">Host Offers</span> | Organize a mass buy for sweet deals!</h1>
        <div className="host-cards">
          <img className="house" src={house} style={{width: "225px",
      marginLeft: "-70px", marginRight:"36px"}}/>
          {host_data.map((info) => {
            return <Card {...info} />
          })}
          <div>
            <AntdCard className='plus-card' onClick={() => {
              history.push("/host");
            }}>
              <div className="plus">
                <PlusOutlined />
              </div>
            <div className="text">Own a store? Have someone host a mass buy for you!</div>
            </AntdCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
