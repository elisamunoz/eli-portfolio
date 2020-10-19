import React from 'react';
import Layout from 'ui/layout/index';
import 'assets/styles/index.scss';
import Home from './home';
import Portfolio from './portfolio';
import About from './about'
import Contact from './contact';

const Page = () => (
  <Layout>
    <Home />
    <Portfolio />
    <About />
    <Contact />
  </Layout>
);

export default Page;
