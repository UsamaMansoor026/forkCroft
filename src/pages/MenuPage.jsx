import React, { useEffect } from "react";
import { PageHeader } from "../components";

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeader heading="Specialties" targetLink="Menu" />
    </>
  );
};

export default MenuPage;
