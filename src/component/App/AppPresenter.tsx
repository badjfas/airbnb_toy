import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import Home from "../../pages/Home";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/a" component={Home} />
    </Switch>
  </BrowserRouter>
);
export default hot(App);
