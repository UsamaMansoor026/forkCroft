import React, { useContext } from "react";
import { CartItemsTable, PageHeader } from "../components";
import { NavigationContext } from "../context/NavigationContext";
import { useCartStore } from "../store/store";
import { Link } from "react-router-dom";

const Cart = () => {
  const { currentUser } = useContext(NavigationContext);
  const subTotal = useCartStore((state) => state.getSubTotal());
  const cartItems = useCartStore((state) => state.cartItems);
  const deliveryCharge = 5.99; // you can adjust this value

  const total = subTotal + deliveryCharge;

  return (
    <div>
      <PageHeader heading={`${currentUser?.name}'s Cart`} targetLink="" />

      <section className="global-padding global-section">
        <CartItemsTable />

        {/* Cart Summary Details */}
        {cartItems?.length > 0 && (
          <div className="bg-primary-text/10 text-primary-text p-6 rounded-lg shadow-md w-full md:max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>${deliveryCharge}</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              // onClick={onCheckout}
              className="bg-button text-white px-4 py-2 rounded-lg block text-center w-full hover:bg-button-hover transition cursor-pointer"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
