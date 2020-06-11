import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Dashboard from "../pages/Dashboard";
import Films from "../pages/Films";
import Film from "../pages/Film";
import Series from "../pages/Series";
import Serie from "../pages/Serie";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/films" component={Films} />
      <Route exact path="/film/:filmId" component={Film} />
      <Route exact path="/series" component={Series} />
      <Route exact path="/series/:serieId" component={Serie} />
    </Switch>
  );
}
