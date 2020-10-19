import React from 'react';
import Layout from 'ui/layout/index';
import 'assets/styles/index.scss';
import Home from 'pages/home';
import Portfolio from 'pages/portfolio';
import About from 'pages/about'
import Contact from 'pages/contact';

const Page = () => (
  <Layout>
    <Home />
    <Portfolio />
    <About />
    <Contact />
  </Layout>
);

export default Page;
