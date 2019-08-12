import React from "react";
import { Route, Router } from "react-router-dom";
import { BASE_ROUTE } from "../constants/routes";
import EditPizza from "../modules/EditPizza";

import history from "./history";
import AppHeader from "../components/AppHeader";

export default (
  <Router history={history}>
    <div>
      <AppHeader push={history.push} />
      <Route path={BASE_ROUTE} exact component={EditPizza} />
    </div>
  </Router>
);
