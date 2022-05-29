import React from "react";
import Image from "../../components/common/image";
import pro25 from "../images/electronics/product/25.jpg";

const data = [
  {
    oder_id: "#51240",
    image: <Image id="image1" data={[pro25]} />,
    status: <span className="badge badge-secondary">Cash On Delivery</span>,
    payment_method: "Visa",
    order_status: <span className="badge badge-success">Delivery</span>,
    date: "Dec 10,18",
    total: "$54671",
  },
];

export default data;
