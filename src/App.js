import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from 'ui/layout/index';
import Home from 'pages/main';
import PageHuemul from 'pages/projects/huemul';
import 'assets/styles/index.scss';

const App = () => (
  <Router>
    <Layout>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects/huemul">
          <PageHuemul />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>

    </Layout>
  </Router>
);

export default App;
