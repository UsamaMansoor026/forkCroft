import React from "react";
import { PageHeader, ReservationForm } from "../components";

const Reservation = () => {
  return (
    <>
      <PageHeader heading="Table Reservation" targetLink="Reservation" />

      <section className="global-padding global-section">
        <ReservationForm />
      </section>
    </>
  );
};

export default Reservation;
