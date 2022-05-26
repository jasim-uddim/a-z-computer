import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Parts = ({ part }) => {
  const {
    name,
    img,
    description,
    price,
    availableQuantity,
    minimumOrderQuantity,
  } = part;
  const navigat = useNavigate();
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState(minimumOrderQuantity);

  const email = user?.email;

  const makeOrder = () => {
    if (order >= 100 && order <= 1000) {
      const newOrder = part;
      newOrder.quantity = order;
      newOrder.email = email;
      newOrder.time = Date().toLocaleString();
      fetch(`https://young-mountain-94737.herokuapp.com/orders`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success === true) {
          } else {
            alert("Already exist update your order");
          }
        });
      navigat("/dashboard/purchase");
    } else {
      alert("Make sure youre Order Quantity");
    }
  };

  //

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price:$ {price}</p>
        <p>Available Quantity:{availableQuantity}</p>
        <p>Minimum Order Quantity:{minimumOrderQuantity}</p>
        <p>{description}</p>
        <input
          type="number"
          placeholder="order quantity"
          onBlur={(e) => setOrder(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <div className="card-actions">
          <button onClick={makeOrder} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parts;
