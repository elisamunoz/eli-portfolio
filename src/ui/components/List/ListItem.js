import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'ui/components/Icon';
import styles from './List.module.scss';

const ListItem = ({
  children,
  className,
}) => (
  <li className={classnames(styles.item, className)}>
    <Icon name='circle' className={styles.itemIcon} />
    <div className={styles.itemContent}>
      {children}
    </div>
  </li>
);
ListItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}
  

export default ListItem;