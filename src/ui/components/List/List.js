import React from 'react';
import PropTypes from 'prop-types';
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

List.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.string,
}

export default List;
