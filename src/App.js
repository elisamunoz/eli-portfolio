import React from 'react';
import Layout from 'ui/layout/index';
import Card from 'ui/components/Card';
import 'assets/styles/index.scss';
import eliPhoto from 'assets/img/elisa.jpg';


const App = () => (
  <Layout>
    <Card
      image={eliPhoto}
      title='Title test bla bla'
      desc='lorem ipsum dolor set'
    ></Card>
    <Card
      image={eliPhoto}
      title='Title test bla bla'
      desc='lorem ipsum dolor set'
    ></Card>
    <Card
      image={eliPhoto}
      title='second card'
      desc='lorem ipsum dolor set'
    ></Card>
  </Layout>
);

export default App;
