import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User } from "react-feather";
import { withRouter, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";

const LoginTabset = () => {
  const history = useHistory();

  const clickActive = (event) => {
    document.querySelector(".nav-link").classList.remove("show");
    event.target.classList.add("show");
  };

  const routeChange = () => {
    history.push(`${process.env.PUBLIC_URL}/dashboard`);
  };
  return (
    <div>
      <Fragment>
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
                  required="true"
                  name="login[email]"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="inputEmail"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  required="true"
                  name="login[password]"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <p className="text-dark">
                  <Input
                    required="true"
                    name="login[checkbox]"
                    type="checkbox"
                  />
                  This is E-Bazar Store Admin Pane. I am agree to obey all the
                  privacy policy & terms and conditions of this store. I'll be
                  only person who responsible to manage this store data.
                </p>
              </FormGroup>

              <div className="form-button">
                <Button
                  color="primary"
                  type="submit"
                  onClick={() => routeChange()}
                >
                  Login
                </Button>
              </div>
              {/* <div className="form-footer">
								<span>Or Login up with social platforms</span>
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
							</div> */}
            </Form>
          </TabPanel>
        </Tabs>
      </Fragment>
    </div>
  );
};

export default withRouter(LoginTabset);
