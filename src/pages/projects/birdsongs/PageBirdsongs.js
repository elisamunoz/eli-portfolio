import React from 'react';
import Section from 'ui/components/Section';
import Article from 'ui/components/Article';
import Link from 'ui/components/Link';
import { List, ListItem } from 'ui/components/List';
import Pic4 from 'assets/img/portfolio/Birdsongs_4.png'
// import styles from './PageBirdsongs.module.scss';

const Page = () => (
  <Section
    title='Birdsongs of the World'
  >
    <Article
      img={Pic4}
    >
      <p>
        Birdsongs of the World is a website dedicated to sharing bird sounds from all over the world. Whether you are a research scientist, a birder, or simply curious about a sound you heard out the window, we invite you to listen, download, and explore the bird sound recordings in the collection.
        <br />
        It connects to a third party API to obtain birdsong and geolocate some of the information using Google Maps.
        <br />
        This website has been possible thanks to the <Link href="https://www.xeno-canto.org/article/153">Xeno-Canto Api</Link>.
      </p>
    
    
      <List title='What technologies I used?'>
        <List.Item>HTML</List.Item>
        <List.Item>CSS</List.Item>
        <List.Item>Javascript</List.Item>
      </List>

      <List title='Libraries:'>
        <ListItem>JQuery (3.2.1)</ListItem>
        <ListItem>Bootstrap (4.3.1)</ListItem>
        <ListItem>Font Awesome 5.11.2</ListItem>
        <ListItem>Google Maps API</ListItem>
        <ListItem>Data Table</ListItem>
        <ListItem>Google Fonts</ListItem>
      </List>
      <p>This website is hosted and deployed using GitHub pages.</p>
      <p>Link to the GitHub repository <Link href='https://github.com/elisamunoz/birdsongs-project'>here</Link></p>
      <p>Link to the live demo <Link href='https://elisamunoz.github.io/birdsongs-project/'>here</Link></p>
    </Article>
  </Section>
);

export default Page;
