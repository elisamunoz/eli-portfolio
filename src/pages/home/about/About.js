import React from 'react';
import { HOME_SECTIONS } from 'const';
import Section from 'ui/components/Section';
import Img from 'ui/components/Img';
import styles from'./About.module.scss';
import aboutImg from 'assets/img/about.jpg';


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
          I am originally from Chile where I received my Veterinarian Degree, one day I decided to leave everything behind and to start my journey, I lived in Canada and Australia, and finally settled down in Ireland. Here I studied and discovered the programming world and I love it, I am actively looking for a job where I can use the new knowledge achieved during the past and current year. If you are curious about my personal projects visit my GitHub page here.
        </p>
      </div>
    </div>
  </Section>
);

export default About;