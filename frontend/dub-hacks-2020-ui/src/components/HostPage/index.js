import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { message, Slider } from 'antd';

import './style.less';
import axios from "axios";
import heart from '../../assets/heart.png';
import host_person from '../../assets/host_person.png';
import star from '../../assets/star.png';

const HostForm = (props) => {
  const [options, setOptions] = useState(['Cooking', 'Fountain Pens', 'Cat Food']);
  const [category, setCategory] = useState("");
  const history = useHistory();
  const handleInputDown = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value) {
        setOptions([...options, e.target.value]);
        setCategory(e.target.value);
        e.target.value='';
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const body = {
      tag: category,
      image: '',
      default_cost: 0,
      name: formData.storeName + "'s " + formData.itemName,
      longitude: 0,
      latitude: 0,
      image: formData.thumb,
      description: formData.desc,
      location: formData.location,
      buy_in_min: buyin,
      default_cost: parseFloat(formData.price),
      reward_desc: formData.reward_desc,
    };
    console.log(body);
    axios.defaults.headers = {
      "Content-Type": 'application/json',
    }
      axios.post(`f255845c2c00.ngrok.io/api/items_create/`, body)
        .then((res) => {
          console.log(res);
          message.success("Created List item!");
          history.push("/dashboard");
        })
  }
  const [formData, setFormData] = useState({});
  const [buyin, setBuyIn] = useState(120);
  const onChange = (e) => {
    formData[e.target.name] = e.target.value
    setFormData(formData);
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
          <form onSubmit={onSubmit}>
            <h2>Store Name</h2>
            <input className="normal-input" name="storeName" onChange={onChange}/>
            <h2>Item Name</h2>
            <input className="normal-input" name="itemName" onChange={onChange}/>
            <h2>Price per unit</h2>
            <input className="normal-input" name="price" onChange={onChange}/>
            <h2 className="location"> Required Buy-ins </h2>
            <Slider min={20} max={500} tooltipVisible={true} tooltipPlacement="bottom" marks={marks} className="slider" defaultValue={120} onChange={(v) => {
              setBuyIn(v);
            }} />
            <h2>Image Thumbnail</h2>
            <input className="normal-input" name="thumb" onChange={onChange}/>
            <h2>Description</h2>
            <textarea className="paragraph-input" name="desc" onChange={onChange}/>
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
            <input className="tag-input" placeholder="Other+" name="tags" onKeyDown={handleInputDown}/>
            <h2 className="location"> Location </h2>
            <input className="normal-input" onChange={onChange}  name="location"/>
            <h2 className="location"> Reward for host </h2>
            <input className="normal-input" onChange={onChange}  name="reward_desc"/>
            <NavLink activeClassName="selected" to="/login">
              <div className="button">Clear</div>
            </NavLink>
            <button className="list-now button" type="submit">List now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HostForm;