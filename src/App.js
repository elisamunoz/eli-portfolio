import React from 'react';
import Layout from 'ui/layout/index';
import Card from 'ui/components/Card';
import 'assets/styles/index.scss';
import eliPhoto from 'assets/img/elisa.jpg';
import Home from './pages/home';
import Portfolio from './pages/portfolio';

const App = () => (

  <Layout>
    <Home />
    <Portfolio />
  </Layout>
);

export default App;
