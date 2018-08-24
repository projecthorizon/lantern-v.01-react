import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Nav } from './components/molecules';
import { Home, WhyWeExist, WhatWeDo, Candidate } from './components/pages';

export default class Lantern extends Component {
  state = {
    nav: {
      logo: 'Lantern',
      routes: [
        { path: '/', component: Home, text: 'Lantern', navButton: false },
        { path: '/why_we_exist', component: WhyWeExist, text: 'Why We Exist', navButton: true },
        { path: '/what_we_do', component: WhatWeDo, text: 'What We Do', navButton: true },
        {
          path: '/cadidate_development',
          component: Candidate,
          text: 'Candidate Development',
          navButton: true
        },
        { path: '#', component: null, text: 'Consultative Recruiting', navButton: true }
      ]
    }
  };

  render() {
    const { nav } = this.state;
    const { logo, routes } = nav;
    const navRoutes = routes.map((route, i) => (
      <Route key={i} exact path={route.path} component={route.component} />
    ));

    return (
      <div>
        <Nav logo={logo} routes={routes} />
        {navRoutes}
      </div>
    );
  }
}
