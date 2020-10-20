import React from 'react';
import Section from 'ui/components/Section';
import Article from 'ui/components/Article';
import Link from 'ui/components/Link';
import { List, ListItem } from 'ui/components/List';
// import styles from './PageHuemul.module.scss';

const Page = () => (
  <Section
    title='The Huemul Organization'
  >
    <Article>
      <p>
        This is The Huemul Organization website, a static website, which first objective is to present the South Andean Deer, the huemul to the world. The project wants to create a bond between the user and this endangered animal, to get donations to keep researching and educating the population to preserve the huemul in the Magallanes Region, Chile.'
      </p>

      <List title='What technologies I used?'>
        <List.Item>HTML</List.Item>
        <List.Item>CSS</List.Item>
      </List>

      <List title='Libraries:'>
        <ListItem>Bootstrap (4.3.1)</ListItem>
        <ListItem>Font Awesome 4.7.0</ListItem>
        <ListItem>Google Fonts</ListItem>
      </List>
      
      <p>This website is hosted and deployed using GitHub pages.</p>
      <p>Link to the GitHub repository <Link href='https://github.com/elisamunoz/the-huemul-organization'>here</Link></p>
      <p>Link to the live demo <Link href='https://elisamunoz.github.io/the-huemul-organization/'>here</Link></p>
    </Article>
  </Section>
);

export default Page;
