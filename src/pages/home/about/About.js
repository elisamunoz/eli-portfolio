import React from 'react';
import { HOME_SECTIONS } from 'const';
import Section from 'ui/components/Section';
import Img from 'ui/components/Img';
import styles from'./About.module.scss';
import aboutImg from 'assets/img/about.jpg';
import LinkText from 'ui/components/LinkText';


const About = () => (
  <Section
    id={HOME_SECTIONS.ABOUT}
    className={styles.about}
    title='About Me'
  >
    <div className={styles.aboutContent}>
      <div className={styles.img}>
        <Img
          src={aboutImg}
          alt='About image'
        />
      </div>
      <div className={styles.txt}>
        <p>I am a creative and think outside the box kind of person, I love keeping myself busy meeting friends and with my hobbies which are knitting, crocheting, sewing, gardening, hiking and baking, I also enjoy learning new skills that help me to improve my professional and/or personal life. 
          <br />
          <br />    
          I am originally from Chile, one day I decided to leave everything behind and to start my journey. I lived in Canada, Australia, Ireland and finally settled down in Spain. In Ireland was where I studied and discovered the programming world and fell in love with it. I am actively looking for a job where I can use the new knowledge achieved during the past years. If you are curious about my personal projects visit my GitHub page <LinkText href='https://github.com/elisamunoz'>here</LinkText>.
        </p>
      </div>
    </div>
  </Section>
);

export default About;