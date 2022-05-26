import React, { useEffect, useState } from "react";
import UserReview from "./UserReview";

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://young-mountain-94737.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-12">
      <h1 className="text-center text-primary text-2xl font-bold">
        User Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-5">
        {reviews.map((data) => (
          <UserReview key={data._id} data={data}></UserReview>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
