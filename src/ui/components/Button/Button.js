import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  children,
  className = '', onClick, disabled = false }) => (
  <button
    onClick={onClick}
    className={classnames(styles.btn, className)}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
