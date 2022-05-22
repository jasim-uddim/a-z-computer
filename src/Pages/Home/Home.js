import React from "react";
import BusinessSummery from "../Business/BusinessSummery";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Tools from "./Tools";
import UserReview from "./UserReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummery></BusinessSummery>
      <UserReview></UserReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
