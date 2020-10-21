import React from 'react';
import Button from 'ui/components/Button'
import styles from './Card.module.scss';

// function Card(props) {
//   // const title = props.title;  
//   // const desc = props.desc;

//   const { title, desc, image } = props;

//   return (
//     <div className={styles.card}>
//       <div className={styles.image} style={{ backgroundImage:`url(${image})` }}/>
//       <div className={styles.text}>
//         {title}<br />
//         olakase <br />
//         {desc}
//       </div>
//     </div>)
// };

// const myFunction = (option) => option * 2;

const Card = (props) => {
  const { title, desc, image } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={image} alt='' />
      </div>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Button>
          More
        </Button>
      </div>
    </div>)
}

export default Card;
