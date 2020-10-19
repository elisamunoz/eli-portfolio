import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from 'ui/layout/index';
import PageHome from 'pages/home';
import PageHuemul from 'pages/projects/huemul';
import 'assets/styles/index.scss';

const App = () => (
  <Router>
    <Layout>

      <Switch>
        <Route exact path="/">
          <PageHome />
        </Route>
        <Route path="/projects/huemul">
          <PageHuemul />
        </Route>
        <Route path="*">
          <PageHome />
        </Route>
      </Switch>

    </Layout>
  </Router>
);

export default App;
