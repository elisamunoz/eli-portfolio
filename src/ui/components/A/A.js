import React from 'react';
import classnames from 'classnames';
import styles from './A.module.scss';

const A = ({
  onClick,
  href,
  className,
  children,
  target,
}) => (
  <a onClick={onClick} 
    href={href}
    target={target}
    className={classnames(styles.A, className)}
  >
    {children}
  </a>
);

export default A;