import React from "react";
import { CartItemsTable, PageHeader } from "../components";

const Cart = () => {
  return (
    <div>
      <PageHeader heading="UserKaName's Cart" targetLink="" />

      <section className="global-padding global-section">
        <CartItemsTable />
      </section>
    </div>
  );
};

export default Cart;
