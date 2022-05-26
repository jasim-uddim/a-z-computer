import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

import ShowUser from "./ShowUser";

const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://young-mountain-94737.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl py-5">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-xl">#</th>
              <th className="text-xl">Email</th>
              <th className="text-xl">User Role</th>
              <th className="text-xl">Change Role</th>
              <th className="text-xl">Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <ShowUser
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></ShowUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
