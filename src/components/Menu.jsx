import React, { useContext } from "react";
import { SectionHeading } from "./index";
import { motion } from "framer-motion";
import { menuItems } from "../assets";
import MenuItem from "./cards/MenuItem";
import { Link } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";

const Menu = () => {
  const { handleSetActiveLink } = useContext(NavigationContext);

  return (
    <section className="global-padding global-section">
      <SectionHeading
        isCenter={true}
        mainHeading="Specialties"
        subHeading="Our Menu"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
        {menuItems.slice(0, 6).map((item) => {
          return <MenuItem item={item} />;
        })}
      </div>

      {/* Call to action btton for See all Dishes */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center items-center mt-4 md:mt-10"
      >
        <Link
          to="menu"
          className="py-4 md:py-2 px-12 bg-button text-primary-text rounded-md md:rounded-full text-lg font-semibold hover:bg-button-hover transition-all duration-300 w-full md:w-fit text-center"
          onClick={() => handleSetActiveLink("menu")}
        >
          See All Dishes
        </Link>
      </motion.div>
    </section>
  );
};

export default Menu;
