import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Label } from 'ui/components/formComponents/Label';
import styles from './FieldWrapper.module.scss';

export const FieldWrapper = ({
  children,
  name,
  label,
  placeholder,
  type = 'text',
  className,
}) => (
  <div className={classnames(styles.wrapper, className)}>
    <Label htmlFor={name} caption={label} className={styles.label} />
    {children}
  </div>
);

FieldWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};


export default FieldWrapper;