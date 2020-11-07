import React from 'react';
import { HOME_SECTIONS } from 'const';
import Button from 'ui/components/Button';
import styles from './Home.module.scss';
import homeImg from 'assets/img/home.jpg';
import Landpage from 'ui/components/Landpage';

const Home = () => (
  <Landpage
    id={HOME_SECTIONS.HOME}
    className={styles.home}
    title={(
      <>
        Hola,<br />
        I'm Elisa!
      </>
    )}
    subtitle={(
      <>
        I’m a <div className={styles.txtImportant}>Junior Software Developer</div> looking for my first job in IT.
      </>
    )}
    img={homeImg}
    imgSection={styles.imgHome}
  >
    <Button className={styles.btn}>
      Download my CV
    </Button>
  </Landpage>
  

);

export default Home;
