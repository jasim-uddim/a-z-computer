import React from "react";
import useUserOrder from "../../hooks/useUserOrder";
import ShowOrders from "./ShowOrders";

const Complate = () => {
  const [orders] = useUserOrder("Complate");
  return (
    <>
      {orders.map((order, index) => (
        <ShowOrders key={order._id} index={index} order={order} />
      ))}
    </>
  );
};

export default Complate;
