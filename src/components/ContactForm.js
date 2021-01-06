/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/contact-form.css';

const ContactForm = ({ onSubmit = () => {} }, ref) => (
  <form className="contact-form" onSubmit={onSubmit} ref={ref}>
    <input
      aria-label="Name"
      id="contactName"
      name="name"
      placeholder="Name"
      required
      type="text"
    />
    <input
      aria-label="Email"
      id="contactEmail"
      name="email"
      placeholder="Email"
      required
      type="email"
    />
    <textarea
      aria-label="Message"
      id="contactMessage"
      name="message"
      placeholder="Message"
      required
    />
    <input
      aria-label="Send"
      className="btn"
      id="contactSubmit"
      type="submit"
      value="Send"
    />
  </form>
);

export default React.forwardRef(ContactForm);
