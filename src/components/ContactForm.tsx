'use client';

import classNames from 'classnames';
import React from 'react';

export type ContactFormProps = {
  className?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
} & Omit<React.ComponentPropsWithRef<'form'>, 'children'>;

export default React.forwardRef(function ContactForm(
  { className, onSubmit = () => {}, ...rest }: ContactFormProps,
  ref: React.ForwardedRef<HTMLFormElement>,
) {
  return (
    <form
      className={classNames('contact-form', className)}
      onSubmit={onSubmit}
      {...rest}
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
});
