import React from "react";

const ContactUsForm = () => {
  return (
    <form>
      <h3 className="font-semibold text-xl mb-6 text-primary-text">
        Contact Us
      </h3>

      {/* Input container Full Name */}
      <div className="mb-8 flex flex-col gap-1">
        <label htmlFor="name" className="text-sm text-captions">
          Full Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="John Doe"
          className="outline-none py-2 text-primary-text border-b-2 border-primary-text/50 focus:border-primary-text/100 transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Input container Email */}
      <div className="mb-8 flex flex-col gap-1">
        <label htmlFor="email" className="text-sm text-captions">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="johndoe@gmail.com"
          className="outline-none py-2 text-primary-text border-b-2 border-primary-text/50 focus:border-primary-text/100 transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Input container Message */}
      <div className="mb-8 flex flex-col gap-1">
        <label htmlFor="message" className="text-sm text-captions">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="Your message here..."
          className="outline-none py-2 text-primary-text border-b-2 border-primary-text/50 focus:border-primary-text/100 transition-all duration-300 ease-in-out resize-y min-h-[90px]"
        />
      </div>

      <button
        type="submit"
        className="py-2 bg-button w-full cursor-pointer duration-200 hover:bg-button-hover hover:shadow-md hover:shadow-button-hover"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;
