import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Data from "../Data";

const Purchase = () => {
  const [user] = useAuthState(auth);
  // const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [update, setUpdate] = useState(0);
  console.log(update);

  useEffect(() => {
    if (user) {
      fetch(
        `https://young-mountain-94737.herokuapp.com/orders/?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user, orders]);

  return (
    <div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>quantity</th>
            <th>minimumOrderQuantity</th>
            <th>availableQuantity</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <Data
              key={index}
              order={order}
              index={index}
              update={update}
              setUpdate={setUpdate}
            ></Data>
          ))}
        </tbody>
      </table>
      <div className="flex h-screen justify-center">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-2xl">update your quantity</span>
          </label>
          <input
            type="number"
            placeholder="update"
            onBlur={(e) => setUpdate(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
