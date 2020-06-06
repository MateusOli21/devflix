import React from "react";
import { Route } from "react-router-dom";

import DefaultLayout from "../pages/_layout/Default";

export default function RouteWrapper({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}
