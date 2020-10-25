import React from 'react';
import classnames from 'classnames';
import styles from './Article.module.scss';

const Article = ({
  children,
  className,
  img,
}) => (
  <div 
    className={classnames(styles.article, className)}
  >
    <div 
      className={styles.img}
      style={{ backgroundImage:`url(${img})` }}
       />
    <div className={styles.txt}>
      {children}
    </div>
  </div>

);

export default Article; 