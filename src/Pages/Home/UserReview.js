import React from "react";

const UserReview = ({ ureview }) => {
  const { displayName, photoURL, review } = ureview;
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row">
        <img
          style={{ height: "100px" }}
          src={
            photoURL
              ? photoURL
              : "https://i.ibb.co/M8pgDX9/1024px-User-avatar-svg.png"
          }
          alt="userPhoto"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-2xl font-bold">{displayName}</h1>
          <p className="py-6">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
