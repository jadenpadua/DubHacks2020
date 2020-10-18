import React from 'react';
import { Progress } from 'antd';

import './style.less';

import star from '../../assets/star.svg';
import redeem from '../../assets/redeem.svg';
import map from '../../assets/map.png';

const BuyPage = (props) => {
  let stars = [];
  for (let i = 0; i < 5; ++i) {
    stars.push(<img className="stars" src={star} key={i} alt="cat" />);
  }

  function calcRemain(cur, goal) {
    if (cur < goal) {
      return goal - cur + ' More required for an exclusive deal!';
    } else {
      return 'Goal reached! Buy to reduce the price even more!';
    }
  }

  return (
    <div className="buypage">
      <div className="b-row">
        <div className="i-card">
          <img src={props.image} className="b-image" alt="i-buy" />
          <div className="price">
            <h3>{props.price}</h3>
          </div>
        </div>
        <div className="i-text">
          <h1 className="title">{props.title}</h1>
          <h3>Visit {props.title}'s website</h3>
          <div className="reviews">
            {stars}
            <p className="n-reviews">
              {Math.floor(Math.random() * 500) + 1} ratings
            </p>
          </div>
          <br />
          <br />
          <div className="buys">
            <h2 className="n-buyins">
              {props.current}/{props.goal} Buy-ins{' '}
              <span className="calc">
                {' '}
                | {calcRemain(props.current, props.goal)}{' '}
              </span>
            </h2>
            <Progress
              strokeColor={{
                '0%': '#EA91B5',
                '40%': '#ECCEA0',
                '100%': '#49F56F',
              }}
              percent={((props.current / props.goal) * 100).toFixed(0)}
              strokeWidth="15px"
            />
          </div>
          <br />
          <br />
          <p className="desc">{props.description}</p>
          <br />
          <div className="redeem">
            <img src={redeem} alt="" />
            <p className="text">
              This mass buy helps support local businesses and families! (
              <u>Learn More</u>)
            </p>
          </div>
        </div>
      </div>
      <div className="map-row">
          <div className="map">
            <img src={map} alt="" />
          </div>
      </div>
    </div>
  );
};

export default BuyPage;
