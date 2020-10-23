import React from 'react';
import Section from'ui/components/Section';
import Button from 'ui/components/Button';
import styles from './Home.module.scss';
import homeImg from 'assets/img/home.jpg'

const Home = () => (
  <Section
      id='home'
      className={styles.home}
      title="Hi there, I'm Elisa!"
      subtitle="I’m a Junior Software Developer looking for my first job in IT. I have just graduated from the Code Institute in Ireland."
      img={homeImg}
  >
    <Button>
      Download my CV
    </Button>
  </Section>
);

export default Home;
