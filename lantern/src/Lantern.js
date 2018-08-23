import React, { Component } from 'react';
import { Nav, SubNav, Card } from './components/molecules';
import { Home } from './components/pages';

export default class Lantern extends Component {
  state = {
    nav: {
      logoName: 'Lantern',
      routes: [
        { path: '#', component: null, text: 'Why We Exist' },
        { path: '#', component: null, text: 'What We Do' },
        { path: '#', component: null, text: 'Candidate Development' },
        { path: '#', component: null, text: 'Consultative Recruiting' }
      ]
    },
    subNav: {
      subNavLinks: [
        { url: '#', text: 'Career Discovery' },
        { url: '#', text: 'Immediate Employment' },
        { url: '#', text: 'Full Service Package' }
      ]
    },
    card: {
      title: 'Career Discovery Package',
      body:
        'Includes 4 hours of 1-on-1 coaching sessions, unlimited text and email support, recorded and transcribed session notes, evidence based Values/Skills/Strengths/Interests inventories by certified practitioners, career discovery and clarification, detailed personal assessment package, resume/cover letter/LinkedIn review & strategy, social media audit, personal narrative development, career path planning and strategy.',
      price: 950,
      footer:
        'All of our candidate services include lifetime support and check-ins. We invest in you for the long term.'
    }
  };

  render() {
    const { nav, subNav, card } = this.state;
    const { logoName, routes } = nav;
    const { subNavLinks } = subNav;
    const { title, body, price, footer } = card;
    return (
      <div className="App">
        <Nav logoName={logoName} routes={routes} />
        <Home />
      </div>
    );
  }
}
