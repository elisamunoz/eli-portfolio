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
    title="Hi there, I'm Elisa!"
    subtitle="I’m a Junior Software Developer looking for my first job in IT."
    img={homeImg}
  >
    <Button>
      Download my CV
    </Button>
  </Landpage>
  

);

export default Home;
