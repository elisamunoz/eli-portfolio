import React from 'react';
import PropTypes from 'prop-types';
import Button from 'ui/components/Button';
import Img from 'ui/components/Img';
import styles from './Card.module.scss';

const Card = (props) => {
  const { title, desc, image, onClickMore } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Img className={styles.image} src={image} />
      </div>
      <div className={styles.text}>
        <h2>{title}</h2><br />
        <p>{desc}</p> <br />
        <Button onClick={onClickMore}>
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
  onClickMore: PropTypes.func,
};

export default Card;
