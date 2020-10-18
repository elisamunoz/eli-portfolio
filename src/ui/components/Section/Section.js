import React from 'react';
import classnames from 'classnames';
import styles from './Section.module.scss';

const Section = ({
  id,
  title,
  subtitle,
  children,
  className,
}) => (
  <section id={id} className={classnames(styles.section, className)}>
    <div className={classnames(styles.container)}>
      <h1 className={classnames(styles.title)}>
        {title}
      </h1>
      <h3 className={styles.subtitle}>
        {subtitle}
      </h3>
      <div className={styles.content}>
        {children}
      </div>
      
    </div>
  </section>
);

export default Section;