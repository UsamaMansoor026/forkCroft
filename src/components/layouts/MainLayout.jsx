import React, { useContext, useEffect } from "react";
import { Footer, Header } from "../index";
import { Outlet, useLocation } from "react-router-dom";
import { NavigationContext } from "../../context/NavigationContext";

const MainLayout = () => {
  const location = useLocation();
  const { handleSetActiveLink } = useContext(NavigationContext);

  useEffect(() => {
    const handleNavigationActive = () => {
      const currentPath = location.pathname;

      if (currentPath.startsWith("/story/")) {
        handleSetActiveLink("stories");
      } else if (currentPath === "/story") {
        handleSetActiveLink("stories");
      } else if (currentPath === "/menu") {
        handleSetActiveLink("menu");
      } else if (currentPath === "/about") {
        handleSetActiveLink("about");
      } else if (currentPath === "/contact") {
        handleSetActiveLink("contact");
      } else if (currentPath === "/") {
        handleSetActiveLink("home");
      }
    };

    handleNavigationActive();
  }, [location.pathname, handleSetActiveLink]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
