import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.Init";
import { BiEdit } from "react-icons/bi";
import useUserOrder from "../../hooks/useUserOrder";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');"
);

const Payment = () => {
  const [user, loading, error] = useAuthState(auth);
  const [orders] = useUserOrder("Pandding");
  const price = orders.reduce(
    (n, { quantity, price }) => n + quantity * price,
    0
  );
  const shippingCharge = (price * 5) / 100;
  const subtotal = price + shippingCharge;
  const disCount = (price * 2) / 100;

  const total = price + shippingCharge - disCount;

  return (
    <section className="mx-2 md:mx-12">
      <section>
        <header className="bg-slate-200 py-3 px-2">
          <h1 className="text-xl">
            Shipping Address{" "}
            <span className="text-lg">
              (Please select only one! shipping address)
            </span>
          </h1>
          <hr className="w-full h-0.5 bg-primary mt-2 " />
        </header>
        <div className="flex flex-col md:flex-row gap-2 items-center bg-white py-5 px-3">
          <div className="flex items-center w-full md:w-2/12">
            <div>
              <img src={user?.photoURL} alt="" />
            </div>
            <div>
              <h1>Dhaka</h1>
              <h1>(Home)</h1>
            </div>
          </div>
          <div className="">
            <h1>Name: {user?.displayName} </h1>
            <h1>Phone: {user?.phoneNumber}</h1>
            <p>Email: {user?.email}</p>
            <p>
              20/3 বাবর রোড, মোহাম্মদপুর, ঢাকা-1207 মোহাম্মদপুর , ঢাকা,
              বাংলাদেশ।
            </p>
          </div>
          <div>
            <button className="flex btn btn-primary text-white px-12 text-2xl">
              <BiEdit />
              <span className="ml-2">Edit</span>
            </button>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-12">
        <div className="summary text-xl">
          <div className="bg-slate-200 py-3 px-2">
            <h1 className="text-xl">Checkout Summary</h1>
            <hr className="w-full h-0.5 bg-primary mt-2 " />
          </div>
          <div className="bg-white p-5">
            <div className="flex justify-between">
              <h1>Price</h1>
              <h1>{price}</h1>
            </div>
            <hr className="w-full mt-2 " />
            <div className="flex justify-between">
              <h1>Shipping</h1>
              <h1>{shippingCharge}</h1>
            </div>
            <hr className="w-full mt-2 " />
            <div className="flex justify-between">
              <h1>Subtotal</h1>
              <h1>{subtotal}</h1>
            </div>
            <hr className="w-full mt-2 " />
            <div className="flex justify-between">
              <h1>Discount</h1>
              <h1>{disCount}</h1>
            </div>
            <hr className="w-full mt-2 " />
            <div className="flex justify-between">
              <h1>Payable Total</h1>
              <h1>{total}</h1>
            </div>
            <hr className="w-full mt-2 " />
          </div>
        </div>
        <div className="payment">
          <header className="bg-slate-200 py-3 px-2">
            <h1 className="text-xl">
              Payment Method{" "}
              <span className="text-lg">
                ((Please select only one! payment method))
              </span>
            </h1>
            <hr className="w-full h-0.5 bg-primary mt-2 " />
          </header>
          <div className="bg-white py-5 px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
              <div class="text-2xl font-bold flex items-center">
                <input
                  className="mr-5 radio checked:bg-red-500"
                  type="radio"
                  name="radio-payment"
                  id="cash"
                />
                <label htmlFor="cash" className="flex items-center">
                  <img src={"https://i.ibb.co/3RfN46d/cod.png"} alt="" />
                  <span>Cash on Delivery</span>
                </label>
              </div>
              <div class="text-xl flex items-center">
                <input
                  className="mr-5 radio checked:bg-red-500 "
                  type="radio"
                  name="radio-payment"
                  id="bkash"
                />
                <label htmlFor="bkash">
                  <img src={"https://i.ibb.co/4NGZDt9/bkash.png"} alt="" />
                </label>
              </div>
              <div class="text-xl flex items-center">
                <input
                  className="mr-5 radio checked:bg-red-500 "
                  type="radio"
                  name="radio-payment"
                  id="card"
                />
                <label htmlFor="card">
                  <img src={"https://i.ibb.co/bsjSp4r/icon-ssl.png"} alt="" />
                </label>
              </div>
              <div class="text-xl flex items-center">
                <input
                  className="mr-5 radio checked:bg-red-500 "
                  type="radio"
                  name="radio-payment"
                  id="nagad"
                />
                <label htmlFor="nagad">
                  <img src={"https://i.ibb.co/W2CH2nx/rocket.png"} alt="" />
                </label>
              </div>
            </div>
          </div>
          <div class="card flex-shrink-0 shadow-2xl bg-base-100">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  total={{
                    price: total,
                    name: user?.displayName,
                    email: user?.email,
                    _id: user?._id,
                  }}
                />
              </Elements>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Payment;
