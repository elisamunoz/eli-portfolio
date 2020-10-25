import React from 'react';
import classnames from 'classnames';
import styles from './A.module.scss';

const A = ({
  onClick,
  href,
  className,
  children,
}) => (
  <a onClick={onClick} 
    href={href}
    className={classnames(styles.A, className)}
  >
    {children}
  </a>
);

export default A;