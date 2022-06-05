import React, { useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import { Delete, CheckCircle, Eye, Image } from "react-feather";
import { Card, CardHeader, Col, Container, Row } from "reactstrap";
import { db } from "../../firebase";

const ShowOrderDetails = ({ orderItems, showDetails }) => {
  return (
    <Card>
      <CardHeader>
        <h5>Order Details: {showDetails}</h5>
      </CardHeader>
      <table>
        <thead style={{ borderBottom: "2px solid #ccc" }}>
          <tr>
            {["Color", "Image", "Name", "Quantity", "Price", "Size"].map(
              (item) => (
                <th style={{ padding: "20px", fontWeight: "500" }}>{item}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item) => (
            <>
              {item.id === showDetails ? (
                <>
                  {item.data.orderItems.map((ite) => (
                    <tr key={ite.id}>
                      <td style={{ padding: "20px", fontWeight: "300" }}>
                        {ite.productColor}
                      </td>
                      <td style={{ padding: "20px", fontWeight: "300" }}>
                        {ite.productImage ? (
                          <img
                            src={ite.productImage}
                            alt="product"
                            width="90px"
                            height="70px"
                          />
                        ) : (
                          <Image className="loading-icon" />
                        )}
                      </td>
                      <td style={{ padding: "20px", fontWeight: "300" }}>
                        {ite.productName}
                      </td>
                      <td style={{ padding: "20px", fontWeight: "300" }}>
                        {ite.productQuantity}
                      </td>
                      <td style={{ padding: "20px", fontWeight: "300" }}>
                        {ite.productPrice}
                      </td>
                      <td style={{ padding: "20px", fontWeight: "300" }}>
                        {ite.productSize}
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                ""
              )}
            </>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

const Orders = ({ orderItems }) => {
  const getOrderData = db.collection("order");
  const onDeleteOrder = (id) => {
    getOrderData.doc(id).delete();
  };
  const onCompleteOrder = (id) => {
    getOrderData.doc(id).update({
      isCompleted: true,
    });
  };
  const [showDetails, setShowDetails] = useState("");
  const [show, setShow] = useState(false);

  const showProdDetails = (id) => {
    setShowDetails(id);
    setShow(true);
  };

  return (
    <>
      <Breadcrumb title="Orders" parent="Sales" />

      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Manage Order</h5>
              </CardHeader>
              {orderItems && (
                <table>
                  <thead style={{ borderBottom: "2px solid #ccc" }}>
                    <tr>
                      {["Order_Id", "Name", "Email", "Total", "Status"].map(
                        (item) => (
                          <th style={{ padding: "20px", fontWeight: "500" }}>
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
                          {item.data.totalPrice}
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
                        <td
                          style={{
                            padding: "20px",
                            fontWeight: "300",
                            color: "crimson",
                            cursor: "pointer",
                          }}
                          title="Delete Order"
                          onClick={() => onDeleteOrder(item.id)}
                        >
                          <Delete />
                        </td>
                        {item.data.isCompleted === false ? (
                          <td
                            style={{
                              padding: "20px",
                              fontWeight: "300",
                              color: "green",
                              cursor: "pointer",
                            }}
                            title="Order Complete?"
                            onClick={() => onCompleteOrder(item.id)}
                          >
                            <CheckCircle />
                          </td>
                        ) : (
                          ""
                        )}
                        <td
                          style={{
                            padding: "20px",
                            fontWeight: "300",
                            color: "#0000ef",
                            cursor: "pointer",
                          }}
                          title="View Details"
                          onClick={() => showProdDetails(item.id)}
                        >
                          <Eye />
                        </td>
                      </tr>
                    ))}
                  </tbody>
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
            {show && (
              <ShowOrderDetails
                orderItems={orderItems}
                showDetails={showDetails}
                setShow={setShow}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Orders;
