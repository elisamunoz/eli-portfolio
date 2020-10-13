import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ children, className, onClick, disabled = false }) => (
  <button
    onClick={onClick}
    className={classnames(styles.btn, className)}
  >
    {children}
  </button>
);

export default Button;
