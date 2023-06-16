import React from 'react';
import View from 'pages/projects/ProjectDetailView';
import Article from 'ui/components/Article';
import LinkText from 'ui/components/LinkText';
import P from 'ui/components/P';
import { List, ListItem } from 'ui/components/List';
import Pic4 from 'assets/img/portfolio/Huemul_4.png';

const Page = () => (
  <View
    title='The Huemul Organization'
  >
    <Article
      img={Pic4}
    >
      <P>
        This is The Huemul Organization website, a static website, which first objective is to present the South Andean Deer, the huemul to the world. The project wants to create a bond between the user and this endangered animal, to get donations to keep researching and educating the population to preserve the huemul in the Magallanes Region, Chile.'
      </P>

      <List title='What technologies I used?'>
        <List.Item>HTML</List.Item>
        <List.Item>CSS</List.Item>
      </List>

      <List title='Libraries:'>
        <ListItem>Bootstrap (4.3.1)</ListItem>
        <ListItem>Font Awesome 4.7.0</ListItem>
        <ListItem>Google Fonts</ListItem>
      </List>

      <List title='Deployment:'>
        <ListItem>This website is hosted and deployed using GitHub pages.</ListItem>
        <ListItem>Link to the GitHub repository <LinkText href='https://github.com/elisamunoz/the-huemul-organization'>here</LinkText></ListItem>
        <ListItem>Link to the live demo <LinkText href='https://elisamunoz.github.io/the-huemul-organization/'>here</LinkText></ListItem>
      </List>
    </Article>
  </View>
);

export default Page;
