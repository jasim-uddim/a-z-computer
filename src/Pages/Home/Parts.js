import React from "react";
import { useNavigate } from "react-router-dom";

const Parts = ({ part }) => {
  const navigate = useNavigate();
  const {
    name,
    img,
    description,
    price,
    availableQuantity,
    minimumOrderQuantity,
  } = part;

  const handleBuyNow = () => {
    navigate("/purchase");
  };
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>Price:$ {price}</p>
        <p>Available Quantity:{availableQuantity}</p>
        <p>Minimum Order Quantity:{minimumOrderQuantity}</p>
        <p>{description}</p>
        <div class="card-actions">
          <button onClick={handleBuyNow} class="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parts;
