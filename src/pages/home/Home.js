import React from 'react';
import classnames from 'classnames';
import Section from'ui/components/Section'
import Button from 'ui/components/Button';
import './Home.scss';

const Home = () => (
  <Section
      id='home'
      className='home'
      title="Hi there, I'm Elisa!"
      subtitle="I’m a Junior Software Developer looking for my first job in IT. I have just graduated from the Code Institute in Ireland."
  >
    <Button>
      Download my CV
    </Button>
  </Section>
);

export default Home;
