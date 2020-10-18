import React from 'react';
import { Progress } from 'antd';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import './style.less';

import star from '../../assets/star.svg';
import redeem from '../../assets/redeem.svg';
import stanley from '../../assets/stanley.png';
import ratings from '../../assets/rating.png';

const BuyPage = (props) => {
  let stars = [];
  for (let i = 0; i < 5; ++i) {
    stars.push(<img className="stars" src={star} key={i} alt="cat" />);
  }

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZW1pbmd1eWVuIiwiYSI6ImNrOGI2ZjRyODA1aHEzZG93cmFxaHR5d2IifQ.x8v_uFbdBanYgRtoKCGIOw'
  });

  function calcRemain(cur, goal) {
    if (cur < goal) {
      return goal - cur + ' More required for an exclusive deal!';
    } else {
      return 'Goal reached! Buy to reduce the price even more!';
    }
  }

  return (
    <div className="buy-page">
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
      <div className="buyer-info">
        <div className="map">
          <Map
            antialias={true}
            containerStyle={{
              height: '250px',
              width: '500px',
              position: 'absolute',
              left: '0'
            }}
            center={[-118.2437, 34.0522]}
            flyToOptions={{
              speed: 0
            }}
            onClick={props.mapClick}
            onStyleLoad={props.mapLoad}
            style="mapbox://styles/mapbox/light-v10"
            zoom = {[12]}
          >
          </Map>
        </div>
        <div className="contact-info">
          <h1 className="pickup-location">
            Pick Up Location
          </h1>
          <h2 className="pickup-location">
            9243 Camino Noguera Street - 1.2mi away
          </h2>
          <div className="host-contact">
            <img className="stanley" src={stanley}/>
            <div className="host-container">
              <b>Contact the host:</b> Stanley Lee
              <img className="ratings" src={ratings}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
