import React from 'react';
import classnames from 'classnames';
import './About.scss';

const About = () => (
  <section id='about' className='about vertical-center'>
    <div className="container">
      <h1 className="about__title">About me</h1>
      <div className="about__content">
        <div className="about__content__img"></div>
        <div className="about__content__txt">
          <h2>I'm Elisa</h2>
          <p>I am a creative and think outside the box kind of person, I love keeping myself busy meeting friends and with my hobbies which are knitting, crocheting, sewing, gardening, hiking and baking, I also enjoy learning new skills that help me to improve my professional and/or personal life. 
          <br />    
          I am originally from Chile where I received my Veterinarian Degree, one day I decided to leave everything behind and to start my journey, I lived in Canada and Australia, and finally settled down in Ireland. Here I studied and discovered the programming world and I love it, I am actively looking for a job where I can use the new knowledge achieved during the past and current year. If you are curious about my personal projects visit my GitHub page here.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;