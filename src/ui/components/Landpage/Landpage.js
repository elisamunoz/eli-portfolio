import React from 'react';
import classnames from 'classnames';
import styles from './Landpage.module.scss';

const Landpage = ({
  id,
  className,
  title,
  subtitle,
  img,
  children,
  imgSection,
}) => (
  <section
    id={id}
    className={classnames(styles.landpage, className)}
  >
    <div className={styles.landpageContent}>
      <div 
        className={classnames(styles.img, imgSection)}
        style={{ backgroundImage:`url(${img})` }}
      />
      <div className={styles.txtContainer}>
        <div className={styles.txt}>
            <h1 className={styles.title}>
              {title}
            </h1>
            <h3 className={styles.subtitle}>
              {subtitle}
            </h3>
            {children}
        </div>
      </div>
    </div>
  </section>
);

export default Landpage;