import React from 'react';
import Article from 'ui/components/Article';
import Section from 'ui/components/Section';
import Link from 'ui/components/Link';
import { List, ListItem } from 'ui/components/List';
import styles from './PageStitchpirations.module.scss';

const Page = () => (
  <Section
    title='Stitchpirations'
  >
    <Article
      paragraph='This website is a dedicated to people that enjoy crocheting,knitting and sewing as hobby or way of life.  The purpose of the app is to aggregate different patterns and articles related to the theme. The user is able to create, read, update and delete (CRUD) entries.'
    >
      <List title='What technologies I used?'>
        <List.Item>HTML</List.Item>
        <List.Item>CSS</List.Item>
        <List.Item>Javascript</List.Item>
        <List.Item>Python</List.Item>
      </List>

      <List title='Libraries and external resources:'>
        <ListItem>Mongo DB</ListItem>
        <ListItem>Flask</ListItem>
        <ListItem>WTForms</ListItem>
        <ListItem>JQuery (3.2.1)</ListItem>
        <ListItem>Bootstrap (4.3.1)</ListItem>
        <ListItem>Font Awesome 5.11.2</ListItem>
        <ListItem>Google Fonts</ListItem>
      </List>

      <List title='Features:'>
        <ListItem>Connects to MongoDB</ListItem>
        <ListItem>CRUD functionality</ListItem>
        <ListItem>Field validation</ListItem>
        <ListItem>Pagination</ListItem>
        <ListItem>Deep linking</ListItem>
        <ListItem>Handling 404 error</ListItem>
        <ListItem>Parallax effect</ListItem>
      </List>


      <p>This website is hosted and deployed using GitHub pages.</p>
      <p>Link to the GitHub repository <Link href='https://github.com/elisamunoz/docu-llamas'>here</Link></p>
      <p>Link to the live demo <Link href='https://docu-llama.herokuapp.com/'>here</Link></p>
      <p>Patterns are hosted using MongoDB</p>
    </Article>
  </Section>
);

export default Page;
