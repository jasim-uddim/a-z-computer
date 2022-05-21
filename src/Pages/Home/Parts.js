import React from "react";

const Parts = ({ part }) => {
  const {
    name,
    img,
    description,
    price,
    availableQuantity,
    minimumOrderQuantity,
  } = part;
  return (
    <div>
      <img src={img} alt="" />
      <div className="px-2">
        <h1 className="text-xl">Name: {name}</h1>
        <p>price: {price}</p>
        <p>Available quantity: {availableQuantity}</p>
        <p>Minimum Order quantity: {minimumOrderQuantity}</p>
        <p>{description}</p>
        <button> buy now</button>
      </div>
    </div>
  );
};

export default Parts;
