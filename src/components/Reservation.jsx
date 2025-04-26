import React from "react";
import { ReservationForm } from "./index";

const Reservation = () => {
  return (
    <section className="global-padding global-section ">
      <div className="max-w-[95%] md:max-w-[650px] mx-auto ">
        <ReservationForm />
      </div>
    </section>
  );
};

export default Reservation;
