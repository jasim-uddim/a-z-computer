import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useUserOrder = (orderStatus) => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(
    (status) => {
      fetch(
        `https://young-mountain-94737.herokuapp.com/order?email=${user?.email}&status=${orderStatus}`
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    },
    [orders]
  );

  return [orders, setOrders];
};

export default useUserOrder;
