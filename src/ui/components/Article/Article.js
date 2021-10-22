import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Article.module.scss';

const Article = ({
  children,
  className,
  img,
}) => (
  <div 
    className={classnames(styles.article, className)}
  >
    <div 
      className={styles.img}
      style={{ backgroundImage:`url(${img})` }}
       />
    <div className={styles.txt}>
      {children}
    </div>
  </div>

);

Article.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  img: PropTypes.string,
}

export default Article; 