import React from 'react';
import { HOME_SECTIONS } from 'const';
import Section from 'ui/components/Section';
import Icon from 'ui/components/Icon';
import  styles from './Contact.module.scss';

const Contact = () => (
  <Section
    id={HOME_SECTIONS.CONTACT}
    className={styles.contact}
    title='Contact Me'
    subtitle='Interested in working together? Don’t hesitate to reach out to me filling out the contact form below, or just calling me.'
  >
    <div className={styles.contactContent}>
      <div className={styles.info}>
        <h4 className={styles.infoTitle}>
          Get in touch with me!
        </h4>
        <p className={styles.infoTxt}>
            Sandyford, Dublin18,<br />
            Ireland<br />
            elisamunozes@gmail.com
        </p>
        <div className={styles.socialMedia}>
            <Icon
              name='github'
              className={styles.contactIcon}
            />
            <Icon
              name='linkedin'
              className={styles.contactIcon}
            />
        </div>
      </div>
      <div className={styles.form}>
      
      </div>
    </div>
  </Section>
);

export default Contact;