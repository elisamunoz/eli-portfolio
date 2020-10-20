import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from 'ui/layout/index';
import PageHome from 'pages/home';
import PageHuemul from 'pages/projects/huemul';
import PageBirdsongs from 'pages/projects/birdsongs';
import PageStitchpirations from 'pages/projects/stitchpirations';
import PageCatcus from 'pages/projects/catcus';
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
        <Route path="/projects/birdsongs">
          <PageBirdsongs />
        </Route>
        <Route path="/projects/stitchpirations">
          <PageStitchpirations />
        </Route>
        <Route path="/projects/catcus">
          <PageCatcus />
        </Route>
      </Switch>

    </Layout>
  </Router>
);

export default App;
