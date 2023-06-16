import React from 'react';
import View from 'pages/projects/ProjectDetailView';
import Article from 'ui/components/Article';
import LinkText from 'ui/components/LinkText';
import P from 'ui/components/P';
import Break from 'ui/components/Break';
import { List, ListItem } from 'ui/components/List';
import Pic2 from 'assets/img/portfolio/Countries_2.png';

const Page = () => (
  <View
    title='Country Info Cards'
  >
    <Article
      img={Pic2}
    >
      <P>
        This app gets information from the countries of the world, with the actual weather from its capital city.
        <Break />
        My first computer ever was a 386 with Window 95 OS. This project is based on the Windows 95 style. When I saw the <LinkText href='https://www.figma.com/file/m2quavvRgb9W2Q1uCkMYFE/Windows-95-Design-System-(Community)?type=design&node-id=70-17'>Windows 95</LinkText> and <LinkText href='https://www.figma.com/file/O5u5mZvYD1fyZeyDYGypFo/Nyan-Design-System-(Community)?type=design&node-id=3074-20357'>Nyan Design Systems</LinkText> I fell in love with them and I wanted to implement them on my project.
        At that time, responsive design didn't exist, but today there is not excuse to not do it, so my project can be seen on mobile and tablet devices.
      </P>

      <List title='This information is obtained from 2 public APIs:'>
        <List.Item><LinkText href='https://restcountries.com/'>REST Countries API:</LinkText> This API contains information from countries from all over the world.</List.Item>
        <List.Item><LinkText href='https://openweathermap.org/api'>Open Weather Map API:</LinkText> This Api provides weather forecast from all over the world.</List.Item>
      </List>

      <List title='What technologies I used?'>
        <List.Item>React</List.Item>
        <List.Item>Sass</List.Item>
        <List.Item>Figma</List.Item>
      </List>

      <List title='Deployment:'>
        <ListItem>This website is hosted and deployed using GitHub pages.</ListItem>
        <ListItem>Link to the GitHub repository <LinkText href='https://github.com/elisamunoz/country-info-cards'>here</LinkText></ListItem>
        <ListItem>Link to the live demo <LinkText href='https://elisamunoz.github.io/country-info-cards/'>here</LinkText></ListItem>
      </List>
    </Article>
  </View>
);

export default Page;
