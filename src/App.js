import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { PATHS } from 'const';
import Layout from 'ui/layout/index';
import PageHome from 'pages/home';
import PageCountries from 'pages/projects/countries';
import PageHuemul from 'pages/projects/huemul';
import PageBirdsongs from 'pages/projects/birdsongs';
import PageStitchpirations from 'pages/projects/stitchpirations';
import PageCatcus from 'pages/projects/catcus';
import PageMovies from 'pages/projects/movies';
import PagePokedex from 'pages/projects/pokedex';
import 'assets/styles/index.scss';

const App = () => (
  <Router>
    <Layout>

      <Switch>
        <Route exact path={PATHS.HOME}>
          <PageHome />
        </Route>
        <Route path={PATHS.PROJECTS_COUNTRIES}>
          <PageCountries />
        </Route>
        <Route path={PATHS.PROJECTS_HUEMUL}>
          <PageHuemul />
        </Route>
        <Route path={PATHS.PROJECTS_BIRDSONGS}>
          <PageBirdsongs />
        </Route>
        <Route path={PATHS.PROJECTS_STITCHPIRATIONS}>
          <PageStitchpirations />
        </Route>
        <Route path={PATHS.PROJECTS_CATCUS}>
          <PageCatcus />
        </Route>
        <Route path={PATHS.PROJECTS_MOVIES}>
          <PageMovies />
        </Route>
        <Route path={PATHS.PROJECTS_POKEDEX}>
          <PagePokedex />
        </Route>
        <Route path="*">
          <PageHome />
        </Route>
      </Switch>

    </Layout>
  </Router>
);

export default App;
