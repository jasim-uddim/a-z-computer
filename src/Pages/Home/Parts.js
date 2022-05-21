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
    <div className="p-2">
      <div>
        <img src={img} alt="" />
        <div className="px-5">
          <h1 className="text-xl">Name: {name}</h1>
          <p>price:$ {price}</p>
          <p>Available quantity: {availableQuantity}</p>
          <p>Minimum Order quantity: {minimumOrderQuantity}</p>
          <p>{description}</p>
          <div className="text-center mt-5">
            <button onClick={handleBuyNow} className="btn btn-primary">
              {" "}
              buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parts;
