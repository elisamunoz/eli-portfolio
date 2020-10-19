import React from 'react';
import classnames from 'classnames';
import styles from './Avatar.module.scss';

const Avatar = ({ img, className }) => (
  <div
    className={classnames(styles.avatar, className)}
    style={{ backgroundImage:`url(${img})` }}
  />
)

export default Avatar;