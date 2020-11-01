import React from 'react';
import Section from 'ui/components/Section';
import Article from 'ui/components/Article';
import A from 'ui/components/A';
import { List, ListItem } from 'ui/components/List';
import Pic4 from 'assets/img/portfolio/Catcus_4.png'
// import styles from './PageCatcus.module.scss';

const Page = () => (
  <Section
    title='Catcus'
  >
    <Article
      img={Pic4}
    >
      <p>
        Catcus Shop is an eCommerce website dedicated to sell plants. This project is to support beginner, or advanced gardeners or what we know as “plant parents”, in a greeny-colorful journey. Gardening has proven to be beneficial for one’s mood. In fact, gardening has even be prescribed in some situations where patients experience such things as anxiety and depression.'
      </p>
      
      <List title='What technologies I used?'>
        <List.Item>HTML</List.Item>
        <List.Item>CSS</List.Item>
        <List.Item>Javascript</List.Item>
        <List.Item>Python</List.Item>
      </List>

      <List title='Libraries and external resources:'>
        <ListItem>Stripe (2.46): to make payment</ListItem>
        <ListItem>Pillow (7.1): to be able to update images</ListItem>
        <ListItem>Bootstrap (4.3.1): to take components from this library</ListItem>
        <ListItem>Font Awesome (5.11.2): to get icons used in the project</ListItem>
        <ListItem>Google Fonts: to get fonts</ListItem>
        <ListItem>Django (1.11): To create the apps that make this website</ListItem>
        <ListItem>PostgreSQL: it is used for database</ListItem>
      </List>

      <List title='Features:'>
        <ListItem>DOM creation</ListItem>
        <ListItem>User authentication</ListItem>
        <ListItem>Login required for certain tasks</ListItem>
        <ListItem>Shopping cart creation and ability to update quantity of products wanted</ListItem>
        <ListItem>Credit/Debit card authentication to pay for products</ListItem>
        <ListItem>Error message when trying to get to a non-existent product or any invalid url</ListItem>
        <ListItem>“Your cart is currently empty” message when trying to open an empty shopping cart</ListItem>
        <ListItem>A default image is placed when the shop owner uploads a product without an image</ListItem>
        <ListItem>Cart and checkout tables show free shipping when purchase is higher than €75</ListItem>
        <ListItem>Transparent to solid-fixed navbar</ListItem>
        <ListItem>Used CSS variables to set colours to make it easier to change color themes in the future if needed</ListItem>
      </List>

        <List title='Hosting'>
        <List.Item>S3 Buckets from AWS: to host images and static files including CSS and Javascript</List.Item>
        <List.Item>Github: for version control of project code. Link to the repository <A href='https://github.com/elisamunoz/cactus-shop'>here</A></List.Item>
        <List.Item>Heroku: to host the live view of this project. Link to the live demo <A href='http://catcus-shop.herokuapp.com/'>here</A></List.Item>
      </List>
    </Article>
  </Section>
);

export default Page;
