import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Review</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
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
