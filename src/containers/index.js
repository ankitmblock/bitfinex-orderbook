import React from "react";
import { Provider } from "react-redux";
import Dashboard from './Dashboard';

import configureStore from "../store";
import { runSaga } from '../sagas/rootSaga';

import RootWrapper from "../components/RootWrapper";

// Configure the store instance
const store = configureStore();

class App extends React.Component {
  constructor() {
    super();

    runSaga();
  }

  render () {
    return (
      <RootWrapper>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </RootWrapper>
    );
  }
} 

App.propTypes = {};

export default App;
