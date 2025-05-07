import React from "react";

const ReservationForm = () => {
  return (
    <form className="global-section py-10 px-4 md:px-10 bg-white/10 shadow-md shadow-white/40 max-w-[95%] md:max-w-[650px] mx-auto">
      {/* Input Container Name and Email field */}
      <div className="input-container flex items-center justify-between gap-4 mb-7">
        {/* Name */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name" className="text-sm text-captions font-semibold">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Maan Mansoor"
            required
            className="outline-none border border-primary-text text-primary-text px-2 py-1.5"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="email"
            className="text-sm text-captions font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            required
            className="outline-none border border-primary-text text-primary-text px-2 py-1.5"
          />
        </div>
      </div>

      {/* Input Container Phone and Date field */}
      <div className="input-container flex items-center justify-between gap-4 mb-7">
        {/* Phone */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="phone"
            className="text-sm text-captions font-semibold"
          >
            Phone No
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+92 300 1234567"
            required
            className="outline-none border border-primary-text text-primary-text px-2 py-1.5"
          />
        </div>
        {/* Date */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="date" className="text-sm text-captions font-semibold">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="example@gmail.com"
            required
            className="outline-none border border-primary-text text-primary-text px-2 py-1.5"
          />
        </div>
      </div>

      {/* Input Container Time and Person field */}
      <div className="input-container flex items-center justify-between gap-4 mb-7">
        {/* Time */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="time" className="text-sm text-captions font-semibold">
            Time
          </label>
          <select
            name="time"
            id="time"
            required
            className="outline-none border bg-transparent border-primary-text text-primary-text px-2 py-1.5 placeholder:text-captions"
          >
            <option value="" defaultChecked>
              Select Time
            </option>
            <option value="8:00AM">8:00AM</option>
            <option value="9:00AM">9:00AM</option>
            <option value="10:00AM">10:00AM</option>
            <option value="11:00AM">11:00AM</option>
            <option value="12:00PM">12:00PM</option>
            <option value="1:00PM">1:00PM</option>
            <option value="2:00PM">2:00PM</option>
            <option value="3:00PM">3:00PM</option>
            <option value="4:00PM">4:00PM</option>
            <option value="5:00PM">5:00PM</option>
            <option value="6:00PM">6:00PM</option>
            <option value="7:00PM">7:00PM</option>
            <option value="8:00PM">8:00PM</option>
            <option value="9:00PM">9:00PM</option>
            <option value="10:00PM">10:00PM</option>
            <option value="11:00PM">11:00PM</option>
          </select>
        </div>

        {/* Person */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="person"
            className="text-sm text-captions font-semibold"
          >
            Person
          </label>
          <select
            name="person"
            id="person"
            required
            className="outline-none border border-primary-text text-primary-text px-2 py-1.5"
          >
            <option value="" defaultChecked>
              Select No of Person
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-button-hover w-full py-2.5 px-4 text-primary-text font-semibold rounded-md hover:bg-button transition-all duration-300 ease-in-out cursor-pointer"
      >
        Make Reservation
      </button>
    </form>
  );
};

export default ReservationForm;
