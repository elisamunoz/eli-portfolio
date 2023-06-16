import React from 'react';
import View from 'pages/projects/ProjectDetailView';
import Article from 'ui/components/Article';
import LinkText from 'ui/components/LinkText';
import P from 'ui/components/P';
import Break from 'ui/components/Break';
import { List, ListItem } from 'ui/components/List';
import Pic4 from 'assets/img/portfolio/Birdsongs_4.png'

const Page = () => (
  <View
    title='Birdsongs of the World'
  >
    <Article
      img={Pic4}
    >
      <P>
        Birdsongs of the World is a website dedicated to sharing bird sounds from all over the world. Whether you are a research scientist, a birder, or simply curious about a sound you heard out the window, we invite you to listen, download, and explore the bird sound recordings in the collection.
        <Break />
        It connects to a third party API to obtain birdsong and geolocate some of the information using Google Maps.
        <br />
        This website has been possible thanks to the <LinkText href="https://www.xeno-canto.org/article/153" caption="Xeno-Canto Api" />.
      </P>
    
    
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

      <List title='Deployment:'>
        <ListItem>This website is hosted and deployed using GitHub pages.</ListItem>
        <List.Item>Link to the GitHub repository <LinkText href='https://github.com/elisamunoz/birdsongs-project' caption="here" /></List.Item>
        <List.Item>Link to the live demo <LinkText href='https://elisamunoz.github.io/birdsongs-project/' caption="here" /></List.Item>
      </List>
    </Article>
  </View>
);

export default Page;
