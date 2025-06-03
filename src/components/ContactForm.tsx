'use client';

import classNames from 'classnames';
import React from 'react';

export type ContactFormProps = {
  className?: string;
} & Omit<React.ComponentPropsWithRef<'form'>, 'children'>;

export default function ContactForm({ className, ...rest }: ContactFormProps) {
  return (
    <form className={classNames('contact-form', className)} {...rest}>
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
