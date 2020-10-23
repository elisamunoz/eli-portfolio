import React from 'react';
import { useLink } from 'hooks/useLink';
import Card from 'ui/components/Card';
import Section from 'ui/components/Section';
import styles from './Portfolio.module.scss';
import huemulPhoto from 'assets/img/portfolio/Huemul_1.png';
import birdsongsPhoto from 'assets/img/portfolio/Birdsongs_1.png';
import stitchsPhoto from 'assets/img/portfolio/Stitchpirations_1.png';
import catcusPhoto from 'assets/img/portfolio/Catcus_1.png';


const Portfolio = () => {
  const [goTo] = useLink();

  return (
    <Section
      id='portfolio'
      className={styles.portfolio}
      title='Portfolio'
      subtitle='This is my portfolio'
    >
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
    </Section>
  )
};

export default Portfolio;