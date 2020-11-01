import React from 'react';
import PropTypes from 'prop-types';
import Button from 'ui/components/Button';
import Img from 'ui/components/Img';
import Group from './Card.Group';
import styles from './Card.module.scss';

const Card = ({
  title,
  desc,
  image,
  onClickMore,
}) => (
  <div className={styles.card}>
    <div className={styles.imgContainer}>
      <Img className={styles.image} src={image} />
    </div>
    <div className={styles.txtContainer}>
      <div className={styles.txt}>
        <div className={styles.txtContent}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{desc}</p>
          {onClickMore &&
            <Button onClick={onClickMore}>
              More
            </Button>
          }
        </div>
      </div>
    </div>
  </div>
);

Card.Group = Group;

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.any,
  onClickMore: PropTypes.func,
};

export default Card;
