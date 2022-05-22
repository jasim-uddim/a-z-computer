import React from "react";

import { AiFillFlag } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { ImManWoman } from "react-icons/im";

const BusinessSummery = () => {
  return (
    <div>
      <h1 className="text-center text-primary font-bold text-4xl">
        A-Z COMPUTER BUSINESS TRUST US
      </h1>
      <h2 className="text-center font-bold text-xl">
        TRY TO UNDERSTAND USERS EXPECTATION
      </h2>
      <div className="flex justify-around mt-14">
        <div className="text-8xl text-primary">
          <AiFillFlag />
          <div>
            <h1 className="text-3xl px-4 font-bold text-accent">72</h1>
            <p className="text-primary text-xl">countries</p>
          </div>
        </div>

        <div className="text-8xl text-primary">
          <ImManWoman />
          <div>
            <h1 className="text-3xl px-4 font-bold text-accent">372+</h1>
            <p className="text-primary text-xl">Happy clients</p>
          </div>
        </div>
        <div className="text-8xl text-primary">
          <AiFillLike />
          <div>
            <h1 className="text-3xl px-4 font-bold text-accent">472+</h1>
            <p className="text-primary text-xl">feedbacks</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center box-border shadow-lg rounded-tr-lg mt-12">
        <div className="p-2">
          <h1 className="text-primary font-bold text-xl p-2">
            HAVE ANY QUESTION ABOUT US OR GAT
          </h1>
          <h1 className="text-primary font-bold text-xl">A PRODUCT REQUEST</h1>
          <h2 className="text-xl mb-2">Don't hesitate to contact us</h2>
        </div>
        <div className="p-2">
          <button class="btn btn-accent mx-4">Request for quote</button>
          <button class="btn btn-primary mx-2">contact us</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
