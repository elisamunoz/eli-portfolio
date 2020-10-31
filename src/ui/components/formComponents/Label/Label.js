import React from 'react';
import PropTypes from 'prop-types';

export const Label = ({
  children,
  caption,
  htmlFor,
  className,
}) => {
  const content = children || caption;

  return !!content ? (
    <label htmlFor={htmlFor} className={className}>{content}</label>
  ) : null
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  caption: PropTypes.string,
  htmlFor: PropTypes.string,
};

export default Label;