import React from 'react';
import View from 'pages/projects/ProjectDetailView';
import Article from 'ui/components/Article';
import LinkText from 'ui/components/LinkText';
import Break from 'ui/components/Break';
import P from 'ui/components/P';
import { List, ListItem } from 'ui/components/List';
import Pic2 from 'assets/img/portfolio/Pokedex_2.png'

const Page = () => {
  const technologies = ["React", "Gatsby", "Typescript", "Redux", "Styled Components", "Figma"]
  return (
    <View
      title="Elisa's Pokedex"
    >
      <Article
        img={Pic2}
      >
        <P>
          When I was a child I used to watch Pokemon cartoons, then a couple of weeks ago I was surfing the web and I got lucky and came across this <LinkText href="https://www.figma.com/file/FrM5KLtKlSHa2jvDDGWwQt/Pok%C3%A9dex-(Community)?type=design&node-id=0-1&t=sk5nRptZx5dTbyYE-0" caption="Pokédex Prototype" /> in Figma, which is based on the <LinkText href="https://pokeapi.co/" caption="Poké API" /> and I thought it was going to be a lot of fun to create my own Pokédex and it was indeed!
          <Break />
          This app gets information about the first Pokemon generation. It shows the 150 Pokemon in a list where you can chose any of them and see the Pokemon chosen in detail.
          <Break />
          This information is obtained from the <LinkText href="https://pokeapi.co/" caption="Poké API" /> which is a public API that contains all the Pokemon information you could imagine, including stats, description, image, name, etc.
          <Break />
          Now I am happy and proud to show it to you.
        </P>
  
        <List title='What technologies I used?'>
          {technologies.map(technology => 
            <List.Item>{technology}</List.Item>
          )}
          
        </List>

        <List title='Deployment:'>
          <ListItem>This website is hosted and deployed using GitHub pages.</ListItem>
          <List.Item>Link to the GitHub repository <LinkText href='https://github.com/elisamunoz/pokedex' caption="here" /></List.Item>
          <List.Item>Link to the live demo <LinkText href='https://elisamunoz.github.io/pokedex/' caption="here" /></List.Item>
        </List>
      </Article>
    </View>
  );
}
export default Page;
