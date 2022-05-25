import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Review = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (user && data.number > 0 && data.number < 6) {
      data.displayName = user?.displayName;
      data.photoUrl = user?.photoURL;

      fetch("http://localhost:5001/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    if (data.number < 0) {
      alert("Must be 0-5 enter any number");
    } else if (data.number > 5) {
      alert("Must be 0-5 enter any number");
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Review</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Retting</span>
              </label>
              <input
                type="number"
                placeholder="your retting"
                className="input input-bordered w-full input-accent max-w-xs"
                {...register("number", {
                  required: {
                    value: true,
                    message: "number is Required",
                  },
                  maxLength: {
                    value: 5,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.number?.type === "maxLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.number.message}
                  </span>
                )}
              </label>
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <textarea
                type="text"
                placeholder="your review"
                className="input input-bordered w-full input-accent max-w-xs h-32"
                {...register("text", {
                  required: {
                    value: true,
                    message: "text is Required",
                  },
                })}
              />
            </div>

            <input
              className="btn w-full max-w-xs text-white mt-4"
              type="submit"
              value="Review"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
