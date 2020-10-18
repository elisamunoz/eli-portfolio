import React from 'react';
import classnames from 'classnames';
import Button from 'ui/components/Button';
import Card from 'ui/components/Card';
import Section from 'ui/components/Section';
import eliPhoto from 'assets/img/elisa.jpg';
import './Portfolio.scss';

const Portfolio = () => (
  <Section
      id='portfolio'
      className='portfolio'
      title='Portfolio'
      subtitle='This is my portfolio'
  >
    <Card
        image={eliPhoto}
        title='Title test bla bla'
        desc='lorem ipsum dolor set'
      />
      <Card
        image={eliPhoto}
        title='Title test bla bla'
        desc='lorem ipsum dolor set'
      />
      <Card
        image={eliPhoto}
        title='second card'
        desc='lorem ipsum dolor set'
      />
  </Section>
);

export default Portfolio;