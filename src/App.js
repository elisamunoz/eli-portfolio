import React from 'react';
import Layout from 'ui/layout/index';
import 'assets/styles/index.scss';
import Home from './pages/home';
import Portfolio from './pages/portfolio';

const App = () => (

  <Layout>
    <Home />
    <Portfolio />
  </Layout>
);

export default App;
