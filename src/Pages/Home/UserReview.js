import React from "react";

const UserReview = ({ data }) => {
  const { displayName, photoUrl, text, number } = data;
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row">
        <img
          style={{ height: "100px" }}
          src={
            photoUrl
              ? photoUrl
              : "https://i.ibb.co/M8pgDX9/1024px-User-avatar-svg.png"
          }
          alt="userPhoto"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-2xl font-bold">{displayName}</h1>
          <p>{text}</p>
          <p>{number}star</p>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
