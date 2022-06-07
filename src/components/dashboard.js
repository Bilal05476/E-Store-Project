import React, { Fragment, useState } from "react";
import Breadcrumb from "./common/breadcrumb";
import { Navigation, Activity } from "react-feather";
import CountUp from "react-countup";
import { Image } from "react-feather";

// import user2 from "../assets/images/dashboard/user2.jpg";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Media,
  Row,
  Table,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const Dashboard = ({ orderItems, userData }) => {
  const [orderTotal, setOrderTotal] = useState(0);
  const [orderQueue, setOrderQueue] = useState(0);
  setTimeout(() => {
    if (orderTotal === 0) {
      calculateMonthly();
      setOrderQueue(orderItems.length);
    }
  }, 1500);
  const calculateMonthly = () => {
    var count = 0;
    return (
      <>
        {orderItems.length > 0 && (
          <>
            {orderItems.map((item) => {
              const ordersAmount = parseInt(item.data.totalPrice);
              count += ordersAmount;
              setOrderTotal(count);
              return <></>;
            })}
          </>
        )}
        {orderItems.length === 0 && (
          <>
            {setOrderTotal(0)}
            return <></>;
          </>
        )}
      </>
    );
  };

  return (
    <Fragment>
      <Breadcrumb title="Dashboard" parent="Home" />
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
                      Total <CountUp className="counter" end={orderQueue} />
                      <small> Only</small>
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
                      Rs <CountUp className="counter" end={orderTotal} />
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
              {orderItems && (
                <table>
                  <thead style={{ borderBottom: "2px solid #ccc" }}>
                    <tr>
                      {["Order_Id", "Name", "Email", "Payment", "Status"].map(
                        (item) => (
                          <th
                            key={item}
                            style={{ padding: "20px", fontWeight: "500" }}
                          >
                            {item}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {orderItems.map((item) => (
                      <tr key={item.id}>
                        <td style={{ padding: "20px", fontWeight: "300" }}>
                          {item.data.orderId}
                        </td>
                        <td style={{ padding: "20px", fontWeight: "300" }}>
                          {item.data.userName}
                        </td>
                        <td style={{ padding: "20px", fontWeight: "300" }}>
                          {item.data.userEmail}
                        </td>
                        <td style={{ padding: "20px", fontWeight: "300" }}>
                          Cash on delivery
                        </td>

                        {item.data.isCompleted === false ? (
                          <td style={{ padding: "20px", fontWeight: "300" }}>
                            processing
                          </td>
                        ) : (
                          <td style={{ padding: "20px", fontWeight: "300" }}>
                            completed
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                  <Link
                    to={`${process.env.PUBLIC_URL}/sales/orders`}
                    style={{ padding: "20px" }}
                  >
                    <Button
                      type="button"
                      color="primary"
                      style={{ margin: "10px auto" }}
                    >
                      Order Details
                    </Button>
                  </Link>
                </table>
              )}
              {!orderItems && (
                <div
                  style={{
                    padding: "20px",
                    fontWeight: "500",
                    color: "#0000ef",
                  }}
                >
                  No order in queue...
                </div>
              )}
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
                            
                            {userData.userImage ? (
                              <img
                                className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                                src={userData.userImage}
                                alt="user"
                                data-original-title=""
                                title="user"
                              />
                            ) : (
                              <Image className="loading-icon" />
                            )}
                            <div className="d-inline-block">
                              <h6>
                                {userData.userName}{" "}
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
