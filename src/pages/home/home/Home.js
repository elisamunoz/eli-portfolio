import React from 'react';
import { HOME_SECTIONS } from 'const';
import Button from 'ui/components/Button';
import styles from './Home.module.scss';
import homeImg from 'assets/img/home.jpg';
import CV from 'assets/ElisaCV.pdf'
import Landpage from 'ui/components/Landpage';
import A from 'ui/components/A';

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
    subtitle="I’m a Junior Software Developer looking for my first job in IT."
    img={homeImg}
    imgSection={styles.imgHome}
  >
  <A
    href={CV}
    target='_blank'
  >
      <Button className={styles.btn}>
        Download my CV
      </Button>
  </A>
  </Landpage>
  

);

export default Home;
