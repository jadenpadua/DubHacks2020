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
import Profile from './containers/Profile';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/" component={HomePage} />
            <Route path="/buypage" component={BuyPage} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
