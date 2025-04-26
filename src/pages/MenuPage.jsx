import React, { useEffect, useState } from "react";
import { PageHeader } from "../components";
import { menuItems, productsCategories } from "../assets";
import MenuItem from "../components/cards/MenuItem";
import { motion, AnimatePresence } from "framer-motion";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(menuItems);

  const filteredProducts =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    const filteredProducts =
      selectedCategory === "All"
        ? menuItems
        : menuItems.filter((product) => product.category === selectedCategory);
    setFilteredItems(filteredProducts);
  }, [selectedCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeader heading="Specialties" targetLink="Menu" />

      <div className="flex flex-wrap justify-center gap-4 my-8">
        {productsCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 w-[130px] rounded-full border 
              ${
                selectedCategory === category
                  ? "bg-primary-text text-primary border-primary"
                  : "bg-transparent text-primary-text border-primary-text "
              }
              transition-all duration-300 cursor-pointer
            `}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="global-padding grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
        <AnimatePresence>
          {filteredItems.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <MenuItem item={item} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MenuPage;
