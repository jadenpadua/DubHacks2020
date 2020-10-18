import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";

import "./style.less";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLogged: false
    }
    this.setUser = props.setUser;

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onEmailChange(e) {
    this.setState({ email: e.target.value });
    console.log(this.state.isLogged)

  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!")
    console.log(this.state.email)
    console.log(this.state.password)

    axios.defaults.headers = {
      "Content-Type": 'application/json',
    }
      axios.get(`http://127.01:8000/api/get_user/${this.state.email}`)
        .then((res) => {
          console.log(res)
          this.setState({isLogged: true, email: '', password: ''})
          const data = JSON.parse(res.data.replace(/'/g,"\""))
          this.setUser(data);
        })
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    if(this.state.isLogged) {
      return <Redirect to = {{ pathname: "/profile" }}  />;
    }

    return (
      <div className="login-form">
        <div>
          <h1>Welcome back to the Massit community! </h1>
          <hr />
          <form onSubmit={this.onSubmit}>
            <h2>Email</h2>
            <input className="normal-input" type="email" value={this.state.email} onChange={this.onEmailChange} />
            <h2>Password</h2>
            <input className="normal-input" type="password" value={this.state.password} onChange={this.onPasswordChange}/>
            <button className="sign-in button" type="submit">Sign In</button>
            <NavLink activeClassName="selected" to="/register">
              <div className="button">Sign Up</div>
            </NavLink>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
