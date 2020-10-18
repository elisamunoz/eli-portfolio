import React from 'react';
import classnames from 'classnames';
import Button from 'ui/components/Button';
import './Home.scss';

const Home = () => (
  <section id='home' className='home vertical-center'>
    <div className='container'>
      <h1 className='title'>
        Hi there, I'm Elisa!
      </h1>
      <h3 className='subtitle'>
        I’m a Junior Software Developer looking for my first job in IT. I have just graduated from the Code Institute in Ireland.
      </h3>
      <Button className='btn'>
        Download my Resume
      </Button>
    </div>
  </section>
);

export default Home;
