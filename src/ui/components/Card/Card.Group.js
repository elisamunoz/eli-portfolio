import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Card.module.scss';

const Group = ({
  children,
  className,
}) => (
  <div className={classnames(
    styles.group,
    className
  )}>
    {children}
  </div>
);

Group.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Group;
