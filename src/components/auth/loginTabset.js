import React, { useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User } from "react-feather";
import { Button, Form, FormGroup, Input } from "reactstrap";

const LoginTabset = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const clickActive = (event) => {
    document.querySelector(".nav-link").classList.remove("show");
    event.target.classList.add("show");
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log("Hi: ", email, ", Pass: ", pass);
  };

  return (
    <>
      <Tabs>
        <TabList className="nav nav-tabs tab-coupon">
          <Tab className="nav-link" onClick={(e) => clickActive(e)}>
            <User />
            Login
          </Tab>
        </TabList>
        <TabPanel>
          <Form className="form-horizontal auth-form">
            <FormGroup>
              <Input
                required
                name="login[email]"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Email"
                id="inputEmail"
              />
            </FormGroup>
            <FormGroup>
              <Input
                required
                name="login[password]"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="form-control"
                placeholder="Password"
              />
            </FormGroup>

            <div className="form-button">
              <Button color="primary" onClick={signIn} type="submit">
                Login
              </Button>
            </div>
            <div className="form-footer">
              <span>Our social platforms</span>
              <ul className="social">
                <li>
                  <a href="/#">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="icon-twitter-alt"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="icon-pinterest-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Form>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default LoginTabset;
