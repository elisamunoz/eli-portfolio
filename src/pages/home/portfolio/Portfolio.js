import React, {useState} from 'react';
import { HOME_SECTIONS } from 'const';
import { useLink } from 'hooks/useLink';
import { linkTo } from '../../../const';
import Card from 'ui/components/Card';
import Section from 'ui/components/Section';
import Pagination from 'ui/components/Pagination';
import styles from './Portfolio.module.scss';
import projects from './projects';

const CARDS_PER_PAGE = 6;

const Portfolio = () => {
  const [goTo] = useLink();
  const [currentPage, setCurrentPage] = useState(0)
  
  const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE)
  const handlePaginationClick = (newPage = 0) => {
    setCurrentPage(newPage)
  }

  const firstItemToShow = currentPage * CARDS_PER_PAGE;
  const lastItemToShow = firstItemToShow + CARDS_PER_PAGE;

  return (
    <Section
      id={HOME_SECTIONS.PORTFOLIO}
      className={styles.portfolio}
      title='Portfolio'
    >
      <Card.Group>
        {projects
        .slice(firstItemToShow, lastItemToShow)
        .map((project, i) => (
          <Card
            key={project.linkPage}
            image={project.image}
            onClickMore={goTo[project.linkPage]}
            title={project.title}
            desc={project.desc}
          />
      ))}
      </Card.Group>
      <Pagination
        href={linkTo.homePortfolio} 
        label='Portfolio'
        currentPage={currentPage}
        totalPages={totalPages}
        onClick={handlePaginationClick}
      />
      <div className={styles.llama} />
    </Section>
  )
};

export default Portfolio;