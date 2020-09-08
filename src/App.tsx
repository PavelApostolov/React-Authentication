import React, { Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import Admin from "./pages/Admin";

const Subjects = React.lazy(() => {
  return import("./pages/Subjects");
});

const app = ({ isAuthenticated, hasAdminPermissions }) => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Auth} />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/subjects" render={(props) => <Subjects {...props} />} />
        <Route path="/account" component={Account} />
        <Route path="/logout" component={Logout} />
        {hasAdminPermissions && <Route path="/admin" component={Admin} />}
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    hasAdminPermissions: state.auth.admin,
  };
};

export default withRouter(connect(mapStateToProps, null)(app));
