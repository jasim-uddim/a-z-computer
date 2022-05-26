import React from "react";
import { toast } from "react-toastify";

const ShowUser = ({ user, refetch, index }) => {
  const { _id, email, role } = user;

  const makeAdmin = () => {
    fetch(
      `https://young-mountain-94737.herokuapp.com/user/admin/${email}?role=${role}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  const removeUser = () => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://young-mountain-94737.herokuapp.com/user/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <button onClick={makeAdmin} className="btn btn-link">
          {role === "Admin" ? "Make User" : " Make Admin"}
        </button>
      </td>
      <td>
        <button onClick={removeUser} className="btn btn-link">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default ShowUser;
