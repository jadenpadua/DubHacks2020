import React, { useState } from "react";
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store';
import './styles/index.less';
import './styles/reset.less';

import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './containers/HomePage';
import BuyPage from './containers/BuyPage';
import LoginPage from './containers/LoginPage';
import StorePage from './containers/StorePage';
import RegisterPage from './containers/RegisterPage';
import HostPage from './containers/HostPage';
import Profile from './containers/Profile';
import Dashboard from "./components/Dashboard";
import { UserProvider } from "./UserContext";

const store = configureStore();

const App = () => {
  const [user, setUser] = useState({});
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
        <UserProvider value={{user: user, setUser: setUser}}>
          <Switch>
            <Route path="/store" component={StorePage} />
            <Route path="/host" component={HostPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/buy" component={BuyPage} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </UserProvider>
        </>
      </ConnectedRouter>
    </Provider> 
  );
};

export default App;
