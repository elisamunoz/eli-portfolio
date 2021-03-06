import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Section.module.scss';

const Section = ({
  id,
  title,
  subtitle,
  children,
  className,
  img,
  backgroundContent,
}) => (
  <section
    id={id}
    className={classnames(styles.section, className)}
    style={{ backgroundImage:`url(${img})` }}
  >
    <div className={styles.container}>
      <div className={classnames(styles.innerContainer, backgroundContent)}>
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
    </div>
  </section>
);

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  img: PropTypes.string,
  backgroundContent: PropTypes.string,
}

export default Section;