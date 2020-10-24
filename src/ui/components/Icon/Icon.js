import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';
import styles from './Icon.module.scss';

const Icon = ({ onClick, className, name = 'home' }) => (
  <i
    onClick={onClick}
    className={classnames(
      `fa fa-${name}`,
      styles.icon,
      onClick ? styles.isClickable : null,
      className
    )}
  />
);

Icon.propTypes = {
  /** font-awesome icon name*/
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;