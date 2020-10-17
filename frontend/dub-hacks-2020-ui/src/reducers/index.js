import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import UserReducer from './UserReducer';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    user: UserReducer,
  });