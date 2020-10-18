import React from 'react';
import classnames from 'classnames';
import Section from 'ui/components/Section';
import Button from 'ui/components/Button';
import  styles from './Contact.module.scss';


const Contact = () => (
  <Section
    id='contact'
    className={styles.contact}
    title='Contact Me'
    subtitle='Interested in working together? Don’t hesitate to reach out to me filling out the contact form below, or just calling me.'
  >

  </Section>
);

export default Contact;