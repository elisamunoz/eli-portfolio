import React from 'react';
import classnames from 'classnames';
import styles from './Article.module.scss';

const Article = ({
  children,
  className,
  paragraph,
}) => (
  <div className={classnames(styles.article, className)}>
    <div className={styles.img} />
    <div className={styles.txt}>
    <p>{paragraph}</p>
      {children}
    </div>
  </div>

);

export default Article;