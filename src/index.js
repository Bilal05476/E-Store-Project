import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.scss";
import App from "./components/app";
import PerfectScrollbar from "react-perfect-scrollbar";
// Dashboard Component
import Dashboard from "./components/dashboard";

//Product Digital
import Digital_add_pro from "./components/products/digital/digital-add-pro";

//Sales
import Orders from "./components/sales/orders";

//Manager Profile
import Profile from "./components/settings/profile";

import Login from "./components/auth/login";

const Root = () => {
  const [user, setUser] = useState("null");
  // useEffect(() => {
  //   setUser("null");
  // }, []);

  return (
    <BrowserRouter basename={"/"}>
      <PerfectScrollbar>
        <Switch>
          {!user ? (
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={Login}
            />
          ) : (
            <App user={user} setUser={user}>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={Dashboard}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/dashboard`}
                component={Dashboard}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/products/add-product`}
                component={Digital_add_pro}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/sales/orders`}
                component={Orders}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/settings/profile`}
                component={Profile}
              />
            </App>
          )}
        </Switch>
      </PerfectScrollbar>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
