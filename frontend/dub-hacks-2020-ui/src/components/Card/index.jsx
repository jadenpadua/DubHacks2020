import React, { useState, useEffect } from 'react';
import { Card as AntdCard } from 'antd';
import { Progress } from 'antd'
import locationsvg from './location.svg';
import {ClockCircleOutlined, SmileOutlined} from '@ant-design/icons'
import './index.less';

const Card = ({buyin, image, title, location, orderDeadline, buyinMin, price, unit, type, description}) => {
  const purchase = () => {
    
  }
  return (
    <div className="Card">
      <AntdCard className="card">
        <img className="cover-img" src={image} />
        <div className="price">
          ${price.toFixed(2)}/{unit}
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
