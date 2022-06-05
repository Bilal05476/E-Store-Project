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

import { db, storage } from "../../../firebase";

const Digital_add_pro = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productMetaTitle, setProductMetaTitle] = useState("");
  const [productMetaDesc, setProductMetaDesc] = useState("");
  const [prodAdded, setProdAdded] = useState("");
  const [prodFailed, setProdFailed] = useState("");

  const prodData = db.collection("homearchive");
  const onProdAdd = async () => {
    const newData = {
      name: productTitle,
      productDescription,
      price: parseFloat(productPrice),
      image: productImage,
      productMetaTitle,
      productMetaDesc,
    };
    prodData
      .add(newData)
      .then(() => {
        setProdAdded("Product Successfully Added!");
        onResetProd();
      })
      .catch((error) => {
        setProdFailed("Error adding: ", error.message);
      });
    getReset();
  };

  const onMediaChange = async (e) => {
    const media = e.target.files[0];
    const storageRef = storage.ref();
    const mediaRef = storageRef.child(media.name);
    await mediaRef.put(media);
    setProductImage(await mediaRef.getDownloadURL());
  };

  const getReset = () => {
    setTimeout(() => {
      setProdAdded("");
      setProdFailed("");
    }, 5000);
  };

  const onResetProd = () => {
    setProductTitle("");
    setProductDescription("");
    setProductImage("");
    setProductPrice("");
    setProductMetaDesc("");
    setProductMetaTitle("");
  };
  return (
    <>
      <Breadcrumb title="Add Products" parent="Product" />
      <Container fluid={true}>
        {prodAdded && (
          <div
            className="display-messages"
            style={{
              textAlign: "center",
              backgroundColor: "lightgreen",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "10px",
              border: "2px solid lightseagreen",
              color: "green",
            }}
          >
            {prodAdded}
          </div>
        )}
        {prodFailed && (
          <div
            className="display-messages"
            style={{
              textAlign: "center",
              backgroundColor: "pink",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "10px",
              border: "2px solid crimson",
              color: "crimson",
            }}
          >
            {prodFailed}
          </div>
        )}
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
                      required={true}
                      value={productTitle}
                      onChange={(e) => setProductTitle(e.target.value)}
                    />
                  </FormGroup>

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
                      required={true}
                      onChange={onMediaChange}
                     
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
                      required={true}
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
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
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
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
                      required={true}
                      value={productMetaTitle}
                      onChange={(e) => setProductMetaTitle(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">Meta Description</Label>
                    <textarea
                      value={productMetaDesc}
                      onChange={(e) => setProductMetaDesc(e.target.value)}
                      rows="4"
                      cols="12"
                      style={{
                        padding: "10px",
                      }}
                    ></textarea>
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <div className="product-buttons text-center">
                      {!productTitle ||
                      !productDescription ||
                      !productMetaDesc ||
                      !productPrice ||
                      !productMetaTitle ? (
                        ""
                      ) : (
                        <Button
                          type="button"
                          color="primary"
                          onClick={onProdAdd}
                        >
                          Add
                        </Button>
                      )}

                      <Button type="reset" color="light" onClick={onResetProd}>
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
