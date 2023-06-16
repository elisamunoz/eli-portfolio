import React from 'react';
import PropTypes from 'prop-types';
import styles from './P.module.scss';

const P = ({
  children
}) => (
  <p className={styles.paragraph}>
    {children}
  </p>
)

P.propTypes = {
  children: PropTypes.any
}

export default P;