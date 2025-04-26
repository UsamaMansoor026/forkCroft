import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, ContactPage, Home, MenuPage } from "./pages";
import { CustomCarousal, Footer, Header } from "./components";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
