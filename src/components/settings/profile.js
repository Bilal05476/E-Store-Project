import React, { Fragment } from "react";
import { Image } from "react-feather";

import TabsetProfile from "./tabset-profile";
import Breadcrumb from "../common/breadcrumb";
import { Card, CardBody, Col, Container, Media, Row, Button } from "reactstrap";

const Profile = ({ userData }) => {
  return (
    <Fragment>
      <Breadcrumb title="Profile" parent="Settings" />
      <Container fluid={true}>
        <Row>
          <Col xl="4">
            <Card>
              <CardBody>
                <div className="profile-details text-center">
                  {userData.userImage ? (
                    <img
                      src={userData.userImage}
                      alt=""
                      className="img-fluid img-90 rounded-circle blur-up lazyloaded"
                    />
                  ) : (
                    <Image className="loading-icon" />
                  )}
              

                  <h5 className="f-w-600 f-16 mb-0">{userData.userName}</h5>
                  <span>{userData.userEmail}</span>
                  <div className="social">
                    <div className="form-group btn-showcase">
                      <Button color="btn social-btn btn-fb d-inline-block">
                        {" "}
                        <i className="fa fa-facebook"></i>
                      </Button>
                      <Button color="btn social-btn btn-twitter d-inline-block">
                        <i className="fa fa-google"></i>
                      </Button>
                      <Button color="btn social-btn btn-google d-inline-block mr-0">
                        <i className="fa fa-instagram"></i>
                      </Button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="project-status">
                  <h5 className="f-w-600 f-16">Employee Status</h5>
                  <Media>
                    <Media body>
                      <h6>
                        Performance <span className="pull-right">89%</span>
                      </h6>
                      <div className="progress sm-progress-bar">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <h6>
                        Overtime <span className="pull-right">60%</span>
                      </h6>
                      <div className="progress sm-progress-bar">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </Media>
                  </Media>
                  <Media>
                    <Media body>
                      <h6>
                        Leaves taken <span className="pull-right">10%</span>
                      </h6>
                      <div className="progress sm-progress-bar">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </Media>
                  </Media>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="8">
            <Card className="profile-card">
              <CardBody>
                <TabsetProfile userData={userData} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Profile;
