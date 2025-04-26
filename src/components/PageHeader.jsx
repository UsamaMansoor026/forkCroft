import React, { useContext, useEffect } from "react";
import { heroBg_images } from "../assets";
import { Link } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";

const PageHeader = ({ heading, targetLink }) => {
  const { handleSetActiveLink } = useContext(NavigationContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="h-[450px] relative"
      style={{
        background: `url(${heroBg_images[2]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mask Image */}
      <div className="absolute inset-0 bg-primary/50" />

      {/* Content */}
      <div className="text-primary-text absolute z-10 w-full bottom-16 flex flex-col items-center justify-center gap-3">
        <h1 className="font-bold text-5xl">{heading}</h1>
        <div className="flex items-center gap-3 uppercase">
          <Link
            to="/"
            className="underline underline-offset-4"
            onClick={() => handleSetActiveLink("home")}
          >
            HOME {">"}
          </Link>
          <h4 className="underline underline-offset-4">
            {targetLink} {">"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
