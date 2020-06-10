import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Dashboard from "../pages/Dashboard";
import Films from "../pages/Films";
import Series from "../pages/Series";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/films" component={Films} />
      <Route exact path="/series" component={Series} />
    </Switch>
  );
}
