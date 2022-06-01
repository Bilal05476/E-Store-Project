import { Fragment } from "react";
import LoginTabset from "./loginTabset";
import Slider from "react-slick";
import stats from "../../assets/images/dashboard/ebazar-w.png";
import "../../assets/scss/slick.scss";
import "../../assets/scss/slick-theme.scss";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const Login = ({ email, pass, setEmail, setPass, signIn, signError }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
  };
  return (
    <Fragment>
      <div className="page-wrapper">
        <div className="authentication-box">
          <Container>
            <Row>
              <Col className="col-md-5 p-0 card-left">
                <Card className="bg-primary">
                  <div className="svg-icon">
                    <img alt="" src={stats} className="Img-fluid" />
                  </div>
                  <Slider className="single-item" {...settings}>
                    <div>
                      <div>
                        <h3>Welcome to E-Bazar</h3>
                        <p>
                          It's our job everyday to make every important aspect
                          of the customer experience a little bit better.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </Card>
              </Col>
              <Col className="col-md-7 p-0 card-right">
                <Card className="tab2-card">
                  <CardBody>
                    <LoginTabset
                      email={email}
                      pass={pass}
                      setEmail={setEmail}
                      setPass={setPass}
                      signIn={signIn}
                      signError={signError}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
