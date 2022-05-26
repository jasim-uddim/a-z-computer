import React from "react";
import useUserOrder from "../../hooks/useUserOrder";
import ShowOrders from "./ShowOrders";

const PanddingOrder = () => {
  const [orders] = useUserOrder("Pandding");
  return (
    <>
      {orders.map((order, index) => (
        <ShowOrders key={order._id} index={index} order={order} />
      ))}
    </>
  );
};

export default PanddingOrder;
