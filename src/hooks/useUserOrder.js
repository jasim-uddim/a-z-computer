import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useUserOrder = (orderStatus) => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(
    (status) => {
      fetch(
        `http://localhost:5001/order?email=${user?.email}&status=${orderStatus}`
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    },
    [orders]
  );

  return [orders, setOrders];
};

export default useUserOrder;
