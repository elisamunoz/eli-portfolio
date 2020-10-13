import React from 'react';
import styles from './Avatar.module.scss';

const Avatar = ({ img }) => (
  <div
    className={styles.avatar}
    style={{ backgroundImage:`url(${img})` }}
  />
)

export default Avatar;