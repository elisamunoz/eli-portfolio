import React from 'react';
import classnames from 'classnames';
import styles from './Section.module.scss';
// import homeImg from 'assets/img/home.jpg'

const Section = ({
  id,
  title,
  subtitle,
  children,
  className,
  img,
}) => (
  <section
    id={id}
    className={classnames(styles.section, className)}
    style={{ backgroundImage:`url(${img})` }}
  >
    <div className={styles.container}>
      <h1 className={styles.title}>
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