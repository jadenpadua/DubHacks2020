import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store';
import './styles/index.less';
import './styles/reset.less';

import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './containers/HomePage';
import BuyPage from './containers/BuyPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/buypage" component={BuyPage} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
