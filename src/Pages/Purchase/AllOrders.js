import React from "react";
import useUserOrder from "../../hooks/useUserOrder";
import ShowOrders from "./ShowOrders";

const AllOrders = () => {
  const [orders, setOrder] = useUserOrder("all");

  const updateOrder = (item, id) => {
    // delete item._id;
    item.orderStatus = "Cancelled";

    fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("item Updated successfully!!!");
      });
  };

  const deleteOrder = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      // Send delete data to server
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = orders.filter((o) => o._id !== id);
          setOrder(remaining);
        });
    }
  };
  return (
    <tbody>
      {orders.map((order, index) => (
        <ShowOrders
          key={order._id}
          index={index}
          updateOrder={updateOrder}
          deleteOrder={deleteOrder}
          order={order}
        />
      ))}
    </tbody>
  );
};

export default AllOrders;
