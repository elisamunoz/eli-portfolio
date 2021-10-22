import React from 'react';
import { HOME_SECTIONS } from 'const';
import Section from 'ui/components/Section';
import Icon from 'ui/components/Icon';
import styles from './Contact.module.scss';
import A from 'ui/components/A';
import ContactForm from './ContactForm';
import llamaPhoto from 'assets/img/llama.jpg';

const Contact = () => (
  <Section
    id={HOME_SECTIONS.CONTACT}
    className={styles.contact}
    title='Contact Me'
    subtitle='Interested in working together? Don’t hesitate to reach out to me filling out the contact form below, or just calling me.'
    img={llamaPhoto}
    backgroundContent={styles.backgroundContent}
  >
    <div className={styles.contactContent}>
      <div className={styles.info}>
        <h4 className={styles.infoTitle}>
          Get in touch with me!
        </h4>
        <p className={styles.infoTxt}>
            Barcelona,<br />
            Spain<br />
            elisamunozes@gmail.com
        </p>
        <div className={styles.socialMedia}>
          <A href='https://github.com/elisamunoz'>
            <Icon
              name='github'
              className={styles.contactIcon}
            />
          </A>
          <A href='https://www.linkedin.com/in/elisamunozes/'>
            <Icon
              name='linkedin'
              className={styles.contactIcon}
            />
          </A>
        </div>
      </div>
      
      <div className={styles.form}>
        <ContactForm />
      </div>
    </div>
  </Section>
);

export default Contact;