import React from "react";
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store';
import "./styles/index.less";
import "./styles/reset.less";

import { Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './containers/HomePage';
import BuyPage from './containers/BuyPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
<<<<<<< HEAD
import Profile from './containers/Profile';
=======
import Dashboard from "./components/Dashboard";
>>>>>>> 108146d181079e2c31836efa585a9cc780696f47

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/buypage" component={BuyPage} />
<<<<<<< HEAD
            <Route path="/profile" component={Profile} />
=======
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
>>>>>>> 108146d181079e2c31836efa585a9cc780696f47
          </Switch>
        </>
      </ConnectedRouter>
    </Provider> 
  );
}

export default App;
