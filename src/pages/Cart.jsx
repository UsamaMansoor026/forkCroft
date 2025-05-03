import React, { useContext } from "react";
import { CartItemsTable, PageHeader } from "../components";
import { NavigationContext } from "../context/NavigationContext";

const Cart = () => {
  const { currentUser } = useContext(NavigationContext);
  return (
    <div>
      <PageHeader heading={`${currentUser?.name}'s Cart`} targetLink="" />

      <section className="global-padding global-section">
        <CartItemsTable />
      </section>
    </div>
  );
};

export default Cart;
