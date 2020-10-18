import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './style.less';

const RegisterForm = (props) => {
  const [options, setOptions] = useState(['Cooking', 'Fountain Pens', 'Cat Food']);
  const [interests, setInterests] = useState([]);

  const handleInputDown = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value) {
        setOptions([...options, e.target.value]);
        setInterests([...interests, e.target.value]);
        e.target.value='';
      }
    }
  }

  return (
    <div className="register-form">
      <div>
        <h1>Become a community member today! </h1>
        <hr/>
        <form>
          <h2>Email</h2>
          <input className="normal-input"/>
          <h2>Password</h2>
          <input className="normal-input"/>
          <h2> Interests </h2>
          {options.map((option)=> {
            return (
              <div className={interests.includes(option)? "active option" : "inactive option"} onClick={() => {
                if(interests.includes(option)){
                  const newInterests = [...interests]
                  const index = newInterests.indexOf(option);
                  newInterests.splice(index,1);
                  setInterests(newInterests);
                }
                else {
                  setInterests([...interests, option]);
                }
              }}>
                {option}
              </div>
            );
          })}
          <input className="tag-input" placeholder="Other+" onKeyDown={handleInputDown}/>
          <h2 className="location"> Location </h2>
          <input className="normal-input"/>
          <NavLink activeClassName="selected" to="/login">
            <div className="button">Sign In</div>
          </NavLink>
          <div className="sign-up button">Sign Up</div>
        </form>
      </div>

    </div>
  )
}

export default RegisterForm;