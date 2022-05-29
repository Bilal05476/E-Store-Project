import React from "react";
import Breadcrumb from "../../common/breadcrumb";
import MyDropzone from "../../common/dropzone";
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
                      required=""
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label pt-0">
                      <span>*</span> SKU
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom02"
                      type="text"
                      required=""
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label className="col-form-label">
                      <span>*</span> Product Price
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom02"
                      type="text"
                      required=""
                    />
                  </FormGroup>

                  <Label className="col-form-label pt-0"> Image Upload</Label>
                  <MyDropzone />
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

                      <textarea rows="4" cols="12"></textarea>
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
                      required=""
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">Meta Description</Label>
                    <textarea rows="4" cols="12"></textarea>
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
