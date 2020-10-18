import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';

import './style.less';
import heart from '../../assets/heart.png';
import host_person from '../../assets/host_person.png';
import star from '../../assets/star.png';

const HostForm = (props) => {
  const [options, setOptions] = useState(['Cooking', 'Fountain Pens', 'Cat Food']);
  const [category, setCategory] = useState("");

  const handleInputDown = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value) {
        setOptions([...options, e.target.value]);
        setCategory(e.target.value);
        e.target.value='';
      }
    }
  }

  const marks = {
    20: {
      label: <span>Min <br/> 20</span>
    },
    500: {
      label: <span>Max <br/> 500</span>
    },
  };

  return (
    <div className="host-page">
      <div className="image">
        <div className="container">
          <h2>Thanks for hosting a mass buy!</h2>
          <img className="host-person" src={host_person}/>
          <img className="heart" src={heart}/>
          <img className="star" src={star}/>
        </div>
      </div>
      <div className="host-form">
        <div>
          <h1>List your mass buy today </h1>
          <hr/>
          <form>
            <h2>Store Name</h2>
            <input className="normal-input"/>
            <h2>Item Name</h2>
            <input className="normal-input"/>
            <h2>Description</h2>
            <textarea className="paragraph-input"/>
            <h2> Category </h2>
            {options.map((option)=> {
              return (
                <div className={category == option? "active option" : "inactive option"} onClick={() => {
                  setCategory(option);
                }}>
                  {option}
                </div>
              );
            })}
            <input className="tag-input" placeholder="Other+" onKeyDown={handleInputDown}/>
            <h2 className="location"> Location </h2>
            <input className="normal-input"/>
            <h2 className="location"> Required Buy-ins </h2>
            <Slider min={20} max={500} tooltipVisible={true} tooltipPlacement="bottom" marks={marks} className="slider" defaultValue={120} />
            <h2 className="location"> Reward for host </h2>
            <input className="normal-input"/>
            <NavLink activeClassName="selected" to="/login">
              <div className="button">Clear</div>
            </NavLink>
            <div className="list-now button">List now</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HostForm;