import { onLocationChanged } from 'connected-react-router';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './style.less';

const RegisterForm = (props) => {
  const [options, setOptions] = useState(['Cooking', 'Fountain Pens', 'Cat Food']);
  const [interests, setInterests] = useState([]);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [location, setLocation] = useState("")
  const [isLogged, setisLogged] = useState(false)

  const onInterestsEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (e.target.value) {
        setOptions([...options, e.target.value]);
        setInterests([...interests, e.target.value]);
        console.log(interests)
        e.target.value='';
      }
    }
  }

  const onEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value)
  }

  const onLocationChange = (e) => {
    e.preventDefault();
    setLocation(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password)
    console.log(interests)
    console.log(location)

    const interests_string = interests.join(',')
    console.log(interests_string)

    // const postObj = {
    //   name: "this is not used",
    //   email: email,
    //   address: location,
      

      
    // }

    // axios.defaults.headers = {
    //   "Content-Type": 'application/json',
    // }

    //   axios.post("http://127.01:8000/api/create/", )
    //     .then((res) => {
    //       console.log(res)
    //       this.setState({isLogged: true, email: '', password: ''})
    //       const data = JSON.parse(res.data.replace(/'/g,"\""))
    //       this.setUser(data);
    //     })

  }


  return (
    <div className="register-form">
      <div>
        <h1>Become a community member today! </h1>
        <hr/>
        <form onSubmit={onSubmit}>
          <h2>Email</h2>
          <input className="normal-input" type="email" value={email} onChange={onEmailChange} />
          <h2>Password</h2>
          <input className="normal-input" type="password" value={password} onChange={onPasswordChange}/>
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
          <input className="tag-input" placeholder="Other+" onKeyDown={onInterestsEnter}/>
          <h2 className="location"> Location </h2>
          <input className="normal-input" type="text" value={location} onChange={onLocationChange} />
          <NavLink activeClassName="selected" to="/login">
            <div className="button">Sign In</div>
          </NavLink>
          <button className="sign-up button" type="submit">Sign Up</button>
        </form>
      </div>

    </div>
  )
}

export default RegisterForm;