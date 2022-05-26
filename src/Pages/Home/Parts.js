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
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState(minimumOrderQuantity);

  const email = user?.email;

  // navigate("/purchase");

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
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Parts;
