import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import A from 'ui/components/A';
import styles from './LinkText.module.scss';

const LinkText = ({
  children,
  caption,
  href,
  className,  
}) => {
  const content = children || caption;

  return !!content ? (
    <A
      href={href}
      className={classnames(styles.link, className)}
    >
      {content}
    </A>
  ) : null;
};

LinkText.propTypes = {
  children: PropTypes.any,
  caption: PropTypes.string,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkText;