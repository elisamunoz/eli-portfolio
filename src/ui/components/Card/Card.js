import React from "react";
import styles from './Card.module.scss';

function Card(props) {
  // const title = props.title;  
  // const desc = props.desc;

  const { title, desc, image } = props;

  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ backgroundImage:`url(${image})` }}/>
      <div className={styles.text}>
        {title}<br />
        olakase <br />
        {desc}
      </div>
    </div>)
};

export default Card;
