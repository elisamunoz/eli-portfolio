import React from 'react';
import { HOME_SECTIONS } from 'const';
import { useLink } from 'hooks/useLink';
import Card from 'ui/components/Card';
import Section from 'ui/components/Section';
import styles from './Portfolio.module.scss';
import huemulPhoto from 'assets/img/portfolio/Huemul_1.png';
import birdsongsPhoto from 'assets/img/portfolio/Birdsongs_1.png';
import stitchsPhoto from 'assets/img/portfolio/Stitchpirations_1.png';
import catcusPhoto from 'assets/img/portfolio/Catcus_1.png';
import portfolioPhoto from 'assets/img/portfolio/Portfolio_1.png';
import cuachCuachPhoto from 'assets/img/portfolio/CuachCuach_1.png';

const Portfolio = () => {
  const [goTo] = useLink();

  return (
    <Section
      id={HOME_SECTIONS.PORTFOLIO}
      className={styles.portfolio}
      title='Portfolio'
    >
      <Card.Group>
        <Card
          image={huemulPhoto}
          onClickMore={goTo.projectHuemul}
          title='The Huemul Organization'
          desc='This Organization is a NGO created to conserve the endangered Huemul in Chilean Patagonia.'
        />
        <Card
          image={birdsongsPhoto}
          onClickMore={goTo.projectBirdsongs}
          title='Birdsongs of the World'
          desc='Birdsongs of the World is a website dedicated to sharing bird sounds from all over the world.'
        />
        <Card
          image={stitchsPhoto}
          onClickMore={goTo.projectStichpirations}
          title='Stitchpirations'
          desc='A place for knitters, crocheters and sewers to keep update to new patterns and ideas.'
        />
        <Card
          image={catcusPhoto}
          onClickMore={goTo.projectCatcus}
          title='Catcus'
          desc='Catcus is an online plant store, we have something for everyone.'
        />
        <Card
          image={portfolioPhoto}
          onClickMore={goTo.projectPortfolio}
          title='Portfolio'
          desc='This is my portfolio. Where I will be posting the projects I will be working on.'
        />
        <Card
          image={cuachCuachPhoto}
          onClickMore={goTo.projectCuachCuach}
          title='Cuach Cuach (Work in progress)'
          desc='Cuach Cuach is a small workshop, they do art, architecture and sewing. They trusted me to do their website.'
        />
      </Card.Group>
      <div className={styles.llama} />
    </Section>
  )
};

export default Portfolio;