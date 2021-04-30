import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import { ActionType } from './action-types';

const middlewareList = [thunk, logger];

export const store = createStore(
  reducers,
  {},
  applyMiddleware(...middlewareList)
);

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
  },
});
