import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Img.module.scss';

const ImgCaption = ({ caption }) => caption ? (
  <figcaption className={styles.caption}>{caption}</figcaption>
) : null;

const Img = ({
  src,
  className,
  caption,
  alt = caption,
}) => (
  <figure className={classnames(styles.wrapper, className)}>
    <img src={src} className={styles.img} alt={alt} />
    <ImgCaption caption={caption} />
  </figure>
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
};

export default Img;
