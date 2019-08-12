import React from "react";
import { Provider } from "react-redux";
import Dashboard from './Dashboard';

import configureStore from "../store";

import RootWrapper from "../components/RootWrapper";

// Configure the store instance
const store = configureStore();

const App = () => (
  <RootWrapper>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </RootWrapper>
);

App.propTypes = {};

export default App;
