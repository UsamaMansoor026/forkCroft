import { createContext, useState } from "react";

export const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <NavigationContext.Provider value={{ activeLink, handleSetActiveLink }}>
      {children}
    </NavigationContext.Provider>
  );
};
