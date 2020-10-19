import React from 'react';
import classnames from 'classnames';
import styles from './List.module.scss';

const List = ({
  className,
  children,
}) => (
  <div className={classnames(styles.list, className)}>
    <p>{children}</p>
    <ul>
      
    </ul>
  </div>
);

export default List;