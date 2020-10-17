import React from "react";
import "./styles/index.less";
import { Button, Space } from "antd";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TestForm from "./components/TestForm";
import AllForms from "./components/AllForms";
import FormDetail from "./components/FormDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/submit-form">
          <div className="button-container">
            <Button type="primary">go to submit page</Button>
          </div>
        </Link>
        <br></br>
        <Link to="/">
          <div className="button-container">
            <Button type="danger">go to home page</Button>
          </div>
        </Link>
        <div className="container">
          <Switch>
            <Route exact path="/" component={AllForms} />
            <Route exact path="/form/:formID/" component={FormDetail} />
            <Route exact path="/submit-form" component={TestForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
