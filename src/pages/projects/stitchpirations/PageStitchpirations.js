import React from 'react';
import View from 'pages/projects/ProjectDetailView';
import Article from 'ui/components/Article';
import LinkText from 'ui/components/LinkText';
import { List, ListItem } from 'ui/components/List';
import Pic4 from 'assets/img/portfolio/Stitchpirations_4.png';

const Page = () => (
  <View
    title='Stitchpirations'
  >
    <Article
      img={Pic4}
    >
      <p>
        This website is a dedicated to people that enjoy crocheting,knitting and sewing as hobby or way of life. The purpose of the app is to aggregate different patterns and articles related to the theme. The user is able to create, read, update and delete (CRUD) entries.
      </p>

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

      <List title='Deployment:'>
        <List.Item>This website is hosted and deployed using GitHub pages.</List.Item>
        <List.Item>Link to the GitHub repository <LinkText href='https://github.com/elisamunoz/docu-llamas'>here</LinkText></List.Item>
        <List.Item>Link to the live demo <LinkText href='https://docu-llama.herokuapp.com/'>here</LinkText></List.Item>
        <List.Item>MongoDB: to host patterns information.</List.Item>
      </List>
    </Article>
  </View>
);

export default Page;
