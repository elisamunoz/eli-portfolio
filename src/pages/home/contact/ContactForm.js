import React from 'react';
import { useMail } from 'hooks/useMail';
import styles from './Contact.module.scss';
import Icon from 'ui/components/Icon';
import Button from 'ui/components/Button';
import { Form, Field } from 'ui/components/formComponents';

const Contact = () => {
  const { isSent, isLoading, actions: mailActions } = useMail();

  const isEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const isValid = (vals = {}) => {
    const { name, email, message } = vals;

    return (
      !!name &&
      !!email &&
      !!isEmail(email) &&
      !!message
    );
  }
  const handleSendMail = (vals) => {
    if(isValid(vals)) {
      mailActions.send(vals);
    }
  }

  return !isSent ? (
    <Form onSubmit={handleSendMail}>
      <Field
        name='name'
        label='Your Name'
        placeholder="e.g. U. Name"
        disabled={isLoading}
      />
      <Field
        name='email'
        label='Email'
        placeholder="e.g. username@example.com"
        disabled={isLoading}
      />
      <Field
        type='textarea'
        label='Message'
        name='message'
        placeholder="Write a message..."
        disabled={isLoading}
      />
      <Button disabled={isLoading}>Submit</Button>
    </Form>
  ) : (
    <div className={styles.confirmation}>
      <Icon className={styles.confirmation_icon} name='check-circle' />
      <span className={styles.confirmation_txt}>
        Thank, your message has been sent!
      </span>
    </div>
  );
};

export default Contact;