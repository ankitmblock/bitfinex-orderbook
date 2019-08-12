/**
 * Create the store
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers';

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const isDev = process.env.NODE_ENV === 'development';
  const middlewares = [sagaMiddleware];

  if (isDev) {
    const { createLogger } = require('redux-logger');
    middlewares.push(createLogger({ collapsed: true }));
  }

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    isDev &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers),
  );

  return store;
}
