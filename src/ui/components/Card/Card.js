import React from 'react';
import PropTypes from 'prop-types';
import Button from 'ui/components/Button';
import Img from 'ui/components/Img';
import styles from './Card.module.scss';

const Card = (props) => {
  const { title, desc, image } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Img className={styles.image} src={image} />
        {/* <img className={styles.image} src={image} alt='' /> */}
      </div>
      <div className={styles.text}>
        <h2>{title}</h2><br />
        <p>{desc}</p> <br />
        <Button>
          More
        </Button>
      </div>
    </div>
  )
};

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.any,
};

export default Card;
