import React, { Fragment } from "react";
import Breadcrumb from "./common/breadcrumb";
import { Navigation, Box, DollarSign, Activity } from "react-feather";
import CountUp from "react-countup";

import user2 from "../assets/images/dashboard/user2.jpg";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Media,
  Row,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Fragment>
      <Breadcrumb title="" parent="Dashboard" />
      <Container fluid={true}>
        <Row>
          <Col xl="3 xl-50" md="6">
            <Card className=" o-hidden widget-cards">
              <CardBody className="bg-info">
                <Media className="static-top-widget row">
                  <div className="icons-widgets col-4">
                    <div className="align-self-center text-center">
                      <Navigation className="font-info" />
                    </div>
                  </div>
                  <Media body className="col-8">
                    <span className="m-0">Orders</span>
                    <h3 className="mb-0">
                      Rs <CountUp className="counter" end={12000} />
                      <small> /Only</small>
                    </h3>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
          <Col xl="3 xl-50" md="6">
            <Card className="o-hidden widget-cards">
              <CardBody className="bg-secondary">
                <Media className="static-top-widget row">
                  <div className="icons-widgets col-4">
                    <div className="align-self-center text-center">
                      <Box className="font-secondary" />
                    </div>
                  </div>
                  <Media body className="col-8">
                    <span className="m-0">Inventory</span>
                    <h3 className="mb-0">
                      Rs <CountUp className="counter" end={9200} />
                      <small> /Only</small>
                    </h3>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
          <Col xl="3 xl-50" md="6">
            <Card className="o-hidden widget-cards">
              <CardBody className="bg-secondary">
                <Media className="static-top-widget row">
                  <div className="icons-widgets col-4">
                    <div className="align-self-center text-center">
                      <DollarSign className="font-secondary" />
                    </div>
                  </div>
                  <Media body className="col-8">
                    <span className="m-0">Profit</span>
                    <h3 className="mb-0">
                      Rs <CountUp className="counter" end={2800} />
                      <small> /Only</small>
                    </h3>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
          <Col xl="3 xl-50" md="6">
            <Card className="o-hidden widget-cards">
              <CardBody className="bg-info">
                <Media className="static-top-widget row">
                  <div className="icons-widgets col-4">
                    <div className="align-self-center text-center">
                      <Activity className="font-info" />
                    </div>
                  </div>
                  <Media body className="col-8">
                    <span className="m-0">Sales</span>
                    <h3 className="mb-0">
                      Rs <CountUp className="counter" end={2800} />
                      <small> /Only</small>
                    </h3>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>

          <Col xl="6 xl-100">
            <Card>
              <CardHeader>
                <h5>Latest Orders</h5>
              </CardHeader>
              <CardBody>
                <div className="user-status table-responsive latest-order-table">
                  <Table borderless>
                    <thead>
                      <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Order Total</th>
                        <th scope="col">Payment Method</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="digits">Rs1200.00</td>
                        <td className="font-secondary">Cash On Delivery</td>
                        <td className="digits">In Process</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Link to="/sales/orders" className="btn btn-primary">
                    View All Orders
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="6 xl-100">
            <Card className="height-equal">
              <CardHeader>
                <h5>Empolyee Status</h5>
              </CardHeader>
              <CardBody>
                <div className="user-status table-responsive products-table">
                  <Table className=" table-bordernone mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Skill Level</th>
                        <th scope="col">Experience</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bd-t-none u-s-tb">
                          <div className="align-middle image-sm-size">
                            <img
                              className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                              src={user2}
                              alt=""
                              data-original-title=""
                              title=""
                            />
                            <div className="d-inline-block">
                              <h6>
                                Bilal Ahmed{" "}
                                <span className="text-muted digits">
                                  (Online)
                                </span>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>Store Manager</td>
                        <td>
                          <div className="progress-showcase">
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "90%" }}
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="digits">2 Year</td>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

// javascript:void(0)

export default Dashboard;
