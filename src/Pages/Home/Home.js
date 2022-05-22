import React from "react";
import BusinessSummery from "../Business/BusinessSummery";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Support from "./Support";
import Tools from "./Tools";
import UserReviews from "./UserReviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummery></BusinessSummery>
      <UserReviews></UserReviews>
      <Support></Support>
      <Footer></Footer>
    </div>
  );
};

export default Home;
