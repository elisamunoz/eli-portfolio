import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Avatar.module.scss';

const Avatar = ({ 
  img,
  className
}) => (
  <div
    className={classnames(styles.avatar, className)}
    style={{ backgroundImage:`url(${img})` }}
  />
)

Avatar.propTypes = {
  img: PropTypes.string,
  className: PropTypes.string,
}

export default Avatar;