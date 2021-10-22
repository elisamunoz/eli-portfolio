import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'ui/components/Icon';
import styles from './Button.module.scss';

const Button = ({
  children,
  className = '',
  onClick,
  disabled = false,
  iconName,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={classnames(
      styles.btn,
      disabled && styles.btn_disabled,
      className
    )}
  >
    {children}
    {iconName &&
      <Icon name={iconName} className={styles.icon} />
    }
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  iconName: PropTypes.string,
};

export default Button;
