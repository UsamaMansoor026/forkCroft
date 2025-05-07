import React from "react";
import { useForm } from "react-hook-form";
import { useCartStore } from "../store/store";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const total = useCartStore((state) => state.getSubTotal());
  const itemsCount = useCartStore((state) => state.totalItems);
  const cartItems = useCartStore((state) => state.cartItems);
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log("Form Data: ", data);

    const stripe = await stripePromise;
    // console.log("Stripe: ", stripe);

    // console.log("Cart Items: ", cartItems);

    try {
      const response = await axios.post(
        "http://localhost:2632/api/payment/create-checkout-session",
        {
          cartItems,
        }
      );

      toast.success("Payment Success");
      window.location.href = response.data.url;
    } catch (err) {
      console.log("Error: ", err);
      toast.error("Error Occured");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-primary-text/10 rounded-lg p-6"
    >
      {/* UserInfo and Address */}
      <div className="space-y-7">
        <h2 className="text-xl font-semibold text-primary-text">
          Contact Information
        </h2>

        {/* Full Name */}
        <div className="space-y-1">
          <label htmlFor="fullName" className="block text-captions">
            Full Name
          </label>
          <input
            {...register("userInfo.fullName", { required: true })}
            type="text"
            placeholder="John Wick"
            className="w-full border border-captions outline-none px-4 py-2 rounded text-primary-text focus:border-tags"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-captions">
            Email
          </label>
          <input
            {...register("userInfo.email", { required: true })}
            type="email"
            placeholder="johnwick@gmail.com"
            className="w-full border border-captions outline-none px-4 py-2 rounded text-primary-text focus:border-tags"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-captions">
            Phone No.
          </label>
          <input
            {...register("userInfo.phone", { required: true })}
            type="tel"
            placeholder="03333333333"
            className="w-full border border-captions outline-none px-4 py-2 rounded text-primary-text focus:border-tags"
          />
        </div>

        {/* Delivery Address */}
        <h2 className="text-xl font-semibold text-primary-text pt-6">
          Delivery Address
        </h2>

        {/* Street */}
        <div className="space-y-1">
          <label htmlFor="street" className="block text-captions">
            Street
          </label>
          <input
            {...register("address.street", { required: true })}
            type="text"
            placeholder="Enter Street"
            className="w-full border border-captions outline-none px-4 py-2 rounded text-primary-text focus:border-tags"
          />
        </div>

        {/* Apartment */}
        <div className="space-y-1">
          <label htmlFor="apartment" className="block text-captions">
            Apartment
          </label>
          <input
            {...register("address.apartment", { required: true })}
            type="text"
            placeholder="Apartment, Suite"
            className="w-full border border-captions outline-none px-4 py-2 rounded text-primary-text focus:border-tags"
          />
        </div>
      </div>

      {/* Order Summary and Payment */}
      <div className="space-y-7 mt-7">
        <h2 className="text-xl font-semibold text-primary-text pt-6">
          Order Summary
        </h2>

        <div className="text-primary-text text-sm space-y-6">
          <div className="flex justify-between">
            <span>Total Items</span>
            <span>{itemsCount}</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>${4.99}</span>
          </div>
          <div className="flex justify-between font-bold text-base border-t mt-2 pt-2">
            <span>Total</span>
            <span>${(total + 4.99).toFixed(2)}</span>
          </div>
        </div>

        {/* Payment */}
        <h2 className="text-xl font-semibold text-primary-text pt-6">
          Payment Method
        </h2>

        <button
          type="submit"
          className="bg-black text-white w-full py-2 rounded hover:bg-gray-900 transition"
        >
          Confirm & Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
