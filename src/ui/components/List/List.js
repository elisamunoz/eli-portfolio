import React from 'react';
import classnames from 'classnames';
import ListItem from './ListItem';
import styles from './List.module.scss';

const List = ({
  children,
  className,
  title,
}) => (
  <div className={classnames(styles.wrapper, className)}>
    {title && <p>{title}</p>}
    <ul className={styles.list}>
      {children}
    </ul>
  </div>
);

List.Item = ListItem;

export default List;
