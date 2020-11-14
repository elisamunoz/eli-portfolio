import React from 'react';
import PropTypes from 'prop-types';
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

A.propTypes = {
  onCLick: PropTypes.func,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any,
  target: PropTypes.string,
};

export default A;