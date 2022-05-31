import React, { useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Digital_add_pro = () => {
  const [state, setState] = useState({
    productTitle: "",
    productDescription: "",
    productPrice: 0,
    productImage: "",
    productMetaTitle: "",
    productMetaDesc: "",
  });
  return (
    <>
      <Breadcrumb title="Add Products" parent="Product" />
      <Container fluid={true}>
        <Row className="product-adding">
          <Col xl="6">
            <Card>
              <CardHeader>
                <h5>General</h5>
              </CardHeader>
              <CardBody>
                <div className="digital-add needs-validation">
                  <FormGroup>
                    <Label className="col-form-label pt-0">
                      <span>*</span> Title
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom01"
                      type="text"
                      required="true"
                      value={state.productTitle}
                    />
                  </FormGroup>

                  {/* <Label className="col-form-label pt-0"> Image Upload</Label> */}
                  {/* <MyDropzone /> */}

                  <FormGroup
                    style={{
                      border: "3px dotted #0000fe",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "30px",
                    }}
                  >
                    <Label className="col-form-label">
                      <span>*</span> Image Upload
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom02"
                      type="file"
                      required="true"
                      value={state.productImage}
                      style={{
                        padding: "0px",
                        border: "0px",
                      }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label className="col-form-label">
                      <span>*</span> Product Price (Rs)
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom02"
                      type="number"
                      required="true"
                      value={state.productPrice}
                    />
                  </FormGroup>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h5>Add Description</h5>
              </CardHeader>
              <CardBody>
                <div className="digital-add needs-validation">
                  <FormGroup className=" mb-0">
                    <div className="description-sm">
                      <Label className="col-form-label pt-0">
                        {" "}
                        Add Description
                      </Label>

                      <textarea
                        value={state.productDescription}
                        rows="4"
                        cols="12"
                        style={{
                          padding: "10px",
                        }}
                      ></textarea>
                    </div>
                  </FormGroup>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h5>Meta Data</h5>
              </CardHeader>
              <CardBody>
                <div className="digital-add needs-validation">
                  <FormGroup>
                    <Label className="col-form-label pt-0"> Meta Title</Label>
                    <Input
                      className="form-control"
                      id="validationCustom05"
                      type="text"
                      required="true"
                      value={state.productMetaTitle}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">Meta Description</Label>
                    <textarea
                      value={state.productMetaDesc}
                      rows="4"
                      cols="12"
                      style={{
                        padding: "10px",
                      }}
                    ></textarea>
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <div className="product-buttons text-center">
                      <Button type="button" color="primary">
                        Add
                      </Button>
                      <Button type="reset" color="light">
                        Reset
                      </Button>
                    </div>
                  </FormGroup>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Digital_add_pro;
