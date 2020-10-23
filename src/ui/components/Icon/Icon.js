import React from 'react';
import classnames from 'classnames';
import styles from './Icon.module.scss';

const Icon = ({ onClick, className, img }) => (
  <div 
    onClick={onClick}
    className={classnames(styles.icon, className)}
    style={{ backgroundImage:`url(${img})` }}
  />
);

// const Icon = ({ className }) => (
//   <div className={styles.icon}>
//     <i className={className} />
//   </div>
// );


export default Icon;