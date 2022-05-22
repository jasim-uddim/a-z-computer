import React from "react";

const Discount = () => {
  return (
    <div className="bg-accent p-12">
      <h1 className="text-white text-bold text-4xl text-center my-10">
        What A-Z-computer members are getting
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row justify-around mt-4 ">
        <div>
          <h1 className="text-secondary text-5xl text-bold mb-5">$126</h1>
          <p className="text-white">Average Yearly Savings</p>
        </div>
        <div>
          <h1 className="text-secondary text-5xl text-bold mb-5">17.92%</h1>
          <p className="text-white">Average Discount</p>
        </div>
        <div>
          <h1 className="text-secondary text-5xl text-bold mb-5">30,000+</h1>
          <p className="text-white">Participating Merchants</p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
