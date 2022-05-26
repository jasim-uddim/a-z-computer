import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const PersonalInfo = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="form-control w-full md:w-9/12 mx-auto bg-base-100 p-5">
      <div>
        <label className="label">
          <span className="label-text-alt text-xl">Name</span>
        </label>
        <input
          type="text"
          value={user ? user?.displayName : "type your Name"}
          className="input input-bordered w-full "
          disabled
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text-alt text-xl">Date of Birth</span>
        </label>
        <input
          type="date"
          value="DD/MM/YYYY"
          className="input input-bordered w-full "
          disabled
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text-alt text-xl">Gender</span>
        </label>
        <span>
          <input type="radio" name="Male" id="male" className="" disabled />
          <label htmlFor="male">Male</label>
        </span>
        <span className="ml-5">
          <input type="radio" name="Male" id="female" disabled />
          <label htmlFor="female">Female</label>
        </span>
      </div>
      <div>
        <label className="label">
          <span className="label-text-alt text-xl">Mobile Number</span>
        </label>
        <input
          type="tell"
          value={user?.phoneNumber ? user?.phoneNumber : "8801000000000"}
          className="input input-bordered w-full"
          disabled
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text-alt text-xl">Email</span>
        </label>
        <input
          type="email"
          value={user ? user?.email : "xxxxxxxx@example.com"}
          className="input input-bordered w-full "
          disabled
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text-alt text-xl">Profile Image</span>
        </label>
        <div className="w-full flex flex-col md:w-6/12 mx-auto">
          <img
            src={"https://i.ibb.co/M8pgDX9/1024px-User-avatar-svg.png"}
            alt=""
          />
          <button disabled className="btn text-white text-xl">
            Change Photo
          </button>
        </div>
        <hr className="mt-5 h-0.5 bg-neutral" />
      </div>
    </div>
  );
};

export default PersonalInfo;
