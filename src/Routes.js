import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home"
import NotFound from "./container/NotFound.js";
import Login from "./container/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
}