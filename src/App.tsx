import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import Subjects from "./pages/Subjects";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import { BrowserRouter } from "react-router-dom";

// const Subjects = React.lazy(() => {
//   return import("./pages/Subjects");
// });

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const hasAdminPermissions = useSelector((state) => state.auth.admin);
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

  return <div>{routes}</div>;
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const RootApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default RootApp;
