import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/contact-form.css';

// eslint-disable-next-line react/prop-types
function ContactForm({ className, onSubmit = () => {} }, ref) {
  return (
    <form
      className={classNames('contact-form', className)}
      onSubmit={onSubmit}
      ref={ref}
    >
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
      <input aria-label="Send" id="contactSubmit" type="submit" value="Send" />
    </form>
  );
}

const ContactFormWrapper = React.forwardRef(ContactForm);

ContactFormWrapper.displayName = 'ContactForm';
ContactFormWrapper.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default ContactFormWrapper;
