import React from "react";

const Service = ({ service }) => {
  return (
    <article
      key={service.id}
      className="flex flex-col gap-4 h-full bg-transparent backdrop-blur-2xl shadow-card p-6 rounded-xl"
    >
      <div className="text-center mb-4 text-captions text-6xl">
        <i className={service.icon}></i>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 text-justify">
        <h3 className="text-2xl font-semibold text-primary-text">
          {service.title}
        </h3>
        <p className="text-primary-text/70 font-light text-[14px] leading-[1.8]">
          {service.description}
        </p>
      </div>
    </article>
  );
};

export default Service;
