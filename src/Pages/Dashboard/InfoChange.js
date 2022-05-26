import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const InfoChange = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="form-control w-full md:w-9/12 mx-auto bg-base-100 p-5">
      <div>
        <label className="label">
          <span className="label-text-alt text-xl">Name</span>
        </label>
        <input
          type="text"
          placeholder={user ? user?.displayName : "type your Name"}
          className="input input-bordered w-full "
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text-alt text-xl">Date of Birth</span>
        </label>
        <input
          type="date"
          placeholder="DD/MM/YYYY"
          className="input input-bordered w-full "
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text-alt text-xl">Gender</span>
        </label>
        <span>
          <input type="radio" name="Male" id="male" className="" />
          <label htmlFor="male">Male</label>
        </span>
        <span className="ml-5">
          <input type="radio" name="Male" id="female" />
          <label htmlFor="female">Female</label>
        </span>
      </div>
      <div>
        <label className="label">
          <span className="label-text-alt text-xl">Mobile Number</span>
        </label>
        <input
          type="tell"
          placeholder={user ? user?.phoneNumber : "8801xxxxxxxxx"}
          className="input input-bordered w-full "
        />
      </div>
      <div>
        <label className="label">
          <span className="label-text-alt text-xl">Email</span>
        </label>
        <input
          type="email"
          placeholder={user ? user?.email : "xxxxxxxx@example.com"}
          className="input input-bordered w-full "
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
          <button className="btn text-white text-xl">Change Photo</button>
        </div>
        <hr className="mt-5 h-0.5 bg-neutral" />
        <div className="btn-group w-full my-5">
          <button className="btn btn-primary text-xl text-white w-1/2">
            Update
          </button>
          <button className="btn btn-secondary text-xl text-white w-1/2">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoChange;
