import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.scss";
import App from "./components/app";
import PerfectScrollbar from "react-perfect-scrollbar";

// Dashboard Component
import Dashboard from "./components/dashboard";

// Products physical
import Product_list from "./components/products/physical/product-list";
import Add_product from "./components/products/physical/add-product";

//Product Digital
import Digital_pro_list from "./components/products/digital/digital-pro-list";
import Digital_add_pro from "./components/products/digital/digital-add-pro";

//Sales
import Orders from "./components/sales/orders";
import Transactions_sales from "./components/sales/transactions-sales";

//Users
import List_user from "./components/users/list-user";

//Manager Profile
import Profile from "./components/settings/profile";

import Login from "./components/auth/login";

const Root = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(null);
  }, []);

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
            <App>
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
                path={`${process.env.PUBLIC_URL}/products/physical/product-list`}
                component={Product_list}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/products/physical/add-product`}
                component={Add_product}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/products/digital/digital-product-list`}
                component={Digital_pro_list}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/products/digital/digital-add-product`}
                component={Digital_add_pro}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/sales/orders`}
                component={Orders}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/sales/transactions`}
                component={Transactions_sales}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/users/list-user`}
                component={List_user}
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
