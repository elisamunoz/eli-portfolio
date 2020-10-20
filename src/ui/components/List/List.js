import React from 'react';
import classnames from 'classnames';
import ListItem from './ListItem';
import styles from './List.module.scss';

const List = ({
  children,
  className,
  title,
}) => (
  <div className={classnames(styles.list, className)}>
    {title
      ? <p>{title}</p>
      : null
    }
    <ul>
      {children}
    </ul>
  </div>
);

List.Item = ListItem;

export default List;