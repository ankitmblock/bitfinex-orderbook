import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

export default () => (
  <BrowserRouter>
    <Route path="/" component={() => <h1>EditPizzaPage</h1>} />
  </BrowserRouter>
);
