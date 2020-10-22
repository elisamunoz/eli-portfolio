import React from 'react';
import PropTypes from 'prop-types';
import Button from 'ui/components/Button';
import Img from 'ui/components/Img';
import styles from './Card.module.scss';

const Card = ({
  title,
  desc,
  image
}) => (
  <div className={styles.card}>
    <div className={styles.imgContainer}>
      <Img className={styles.image} src={image} />
    </div>
    <div className={styles.txtContainer}>
      <div className={styles.txt}>
        <div className={styles.txtContent}>
          <h2>{title}</h2>
          <p>{desc}</p>
          <Button>
            More
          </Button>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.any,
};

export default Card;
