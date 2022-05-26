import React from "react";
import useUserOrder from "../../hooks/useUserOrder";
import ShowOrders from "./ShowOrders";

const CancelledOrder = () => {
  const [orders] = useUserOrder("Cancelled");
  return (
    <>
      {orders.map((order, index) => (
        <ShowOrders key={order._id} index={index} order={order} />
      ))}
    </>
  );
};

export default CancelledOrder;
