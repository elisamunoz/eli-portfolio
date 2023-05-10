import React from 'react';
import View from 'pages/projects/ProjectDetailView';
import Article from 'ui/components/Article';
import LinkText from 'ui/components/LinkText';
import { List, ListItem } from 'ui/components/List';
import Pic2 from 'assets/img/portfolio/Movies_2.png'

const Page = () => (
  <View
    title='Birdsongs of the World'
  >
    <Article
      img={Pic2}
    >
      <p>
        You'll be presented with a question and some movie options, when you click one of them, you'll see a new question, with new options. Eventually you'll be presented with a modal that redirects you to the IMDb website of the last picked movie. This is a responsive app.
      </p>
    
    
      <List title='What technologies I used?'>
        <List.Item>ReactJs</List.Item>
        <List.Item>React-CSS-Modules</List.Item>
        <List.Item>Sass</List.Item>
        <List.Item>GitHub</List.Item>
        <List.Item>Figma</List.Item>
      </List>

      <List title='Libraries:'>
        <ListItem>Google Fonts</ListItem>
      </List>

      <List title='Deployment:'>
        <ListItem>This website is hosted and deployed using GitHub pages.</ListItem>
        <List.Item>Link to the GitHub repository <LinkText href='https://github.com/elisamunoz/movie-picker' caption="here" /></List.Item>
        <List.Item>Link to the live demo <LinkText href='https://elisamunoz.github.io/movie-picker/' caption="here" /></List.Item>
      </List>
    </Article>
  </View>
);

export default Page;
