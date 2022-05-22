import React from "react";

import { AiFillFlag } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { ImManWoman } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const BusinessSummery = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/support");
  };
  return (
    <div>
      <h1 className="text-center text-primary font-bold text-4xl">
        A-Z COMPUTER BUSINESS TRUST US
      </h1>
      <h2 className="text-center font-bold text-xl">
        TRY TO UNDERSTAND USERS EXPECTATION
      </h2>
      <div className="pl-12 mt-14 columns-1 md:columns-2 lg:columns-3">
        <div className="text-8xl text-primary pl-2.5">
          <AiFillFlag />
          <div>
            <h1 className="text-3xl px-4 font-bold text-accent">72</h1>
            <p className="text-primary text-xl">countries</p>
          </div>
        </div>

        <div className="text-8xl text-primary pl-2.5">
          <ImManWoman />
          <div>
            <h1 className="text-3xl px-4 font-bold text-accent">372+</h1>
            <p className="text-primary text-xl">Happy clients</p>
          </div>
        </div>
        <div className="text-8xl text-primary pl-2.5">
          <AiFillLike />
          <div>
            <h1 className="text-3xl px-4 font-bold text-accent">472+</h1>
            <p className="text-primary text-xl">feedbacks</p>
          </div>
        </div>
      </div>
      <div className="columns-1 md:columns-2 box-border shadow-lg rounded-tr-lg mt-12">
        <div className="p-12">
          <h1 className="text-primary font-bold text-xl">
            HAVE ANY QUESTION ABOUT US OR GAT
          </h1>
          <h1 className="text-primary font-bold text-xl">A PRODUCT REQUEST</h1>
          <h2 className="text-xl mb-12">Don't hesitate to contact us</h2>
        </div>
        <div className="p-2">
          <button className="btn btn-accent mx-4 mb-4">
            Request for quote
          </button>
          <button onClick={handleContact} className="btn btn-primary mx-2">
            contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
