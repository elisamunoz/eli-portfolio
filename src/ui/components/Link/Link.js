import React from 'react';
import classnames from 'classnames';
import styles from './Link.module.scss';

const Link = ({ children, className }) => (
  <a className={classnames(styles.link, className)}>
    {children}
  </a>
);

export default Link;