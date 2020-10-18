import React from 'react';
import classnames from 'classnames';
import Button from 'ui/components/Button';
import Card from 'ui/components/Card';
import eliPhoto from 'assets/img/elisa.jpg';
import './Portfolio.scss';

const Portfolio = () => (
  <section id='portfolio' className='portfolio vertical-center'>
  <div class='container'>
    <h1 class='title'>
      My Portfolio
    </h1>
    <h3 className='subtitle'>
      
    </h3>
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
  </div>
</section>
);

export default Portfolio;