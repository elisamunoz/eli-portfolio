import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import A from 'ui/components/A';
import styles from './LinkText.module.scss';

const LinkText = ({
  children,
  caption,
  href,
  target = '_blank',
  className,  
}) => {
  const content = children || caption;

  return !!content ? (
    <A
      href={href}
      target={target}
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
  target: PropTypes.string,
  className: PropTypes.string,
};

export default LinkText;