import React from 'react';
import { HOME_SECTIONS } from 'const';
import Section from'ui/components/Section';
import Button from 'ui/components/Button';
import styles from './Home.module.scss';
import homeImg from 'assets/img/home.jpg'

const Home = () => (
  <Section
      id={HOME_SECTIONS.HOME}
      className={styles.home}
      title="Hi there, I'm Elisa!"
      subtitle="I’m a Junior Software Developer looking for my first job in IT. I have just graduated from the Code Institute in Ireland."
      img={homeImg}
  >
    <div className={styles.homeContent}>
      <Button>
        Download my CV
      </Button>
    </div>
  </Section>
);

export default Home;
