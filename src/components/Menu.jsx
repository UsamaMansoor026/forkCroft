import React from "react";
import { SectionHeading } from "./index";
import yend from "../assets/products/Spicy-Lamb-Chops.png";
import { menuItems } from "../assets";
import MenuItem from "./cards/MenuItem";

const Menu = () => {
  return (
    <section className="global-padding global-section">
      <SectionHeading
        isCenter={true}
        mainHeading="Specialties"
        subHeading="Our Menu"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
        {menuItems.map((item) => {
          return <MenuItem item={item} />;
        })}
      </div>
    </section>
  );
};

export default Menu;
