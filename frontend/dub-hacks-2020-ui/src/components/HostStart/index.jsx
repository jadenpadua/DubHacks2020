import React from 'react';

import './style.less';

import auth_background from '../../assets/auth_background.png';
import smiley from '../../assets/smiley.svg';
import dollar from '../../assets/dollar.svg';
import redeem from '../../assets/redeem.svg';

const HostStart = (props) => {

  return (
    <div className="host-start">
      <div className="image-container">
        <div className="price">$15.00/bed</div>
        <img className="item-image" src={auth_background}/>
      </div>
      <div className="container">
        <div className="store-name">Jamal's Cat Bed Store</div>
        <div className="website-link">Visit Jamal's website</div>
        <span className="dollar"><img src={dollar}/><div>Get a $25 gift card to Jama’s Cat bed Store</div></span>
        <span className="smiley"><img src={smiley}/><div>Requires 23 buy-ins</div></span>
        <div className="description">Bali Blue Moon has the same spicy, complex notes and backbone as Sumatra, just a bit finer. With less of the earthy, herbal punch, it starts and ends with smooth. Weighty in the cup, with dark chocolate and caramel notes and a syrupy body, it’s a great complement to blustery weather, an ideal mug to cradle in your hands as the weather starts to turn.</div>
        <span className="redeem"><img src={redeem}/><div>Helps support Jamals’s mother (Read more)</div></span>
        <div className="button">Host Now</div>
      </div>
    </div>
  );
};

export default HostStart;
