import React from 'react';
import classnames from 'classnames';
import styles from './List.module.scss';

const ListItem = ({
  children,
  className,
}) => (
  <li className={classnames(styles.item, className)}>
    {children}
  </li>
);

export default ListItem;