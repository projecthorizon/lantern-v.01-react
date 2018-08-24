import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Discovery, FullService, Immediate } from '../organisms';
import { Nav, Card } from '../molecules';

export default class Candidate extends Component {
  state = {
    subNav: {
      routes: [
        {
          path: '#',
          component: null,
          text: 'Career Discovery',
          navButton: true
        },
        {
          path: '#',
          component: null,
          text: 'Immediate Employment',
          navButton: true
        },
        {
          path: '#',
          component: null,
          text: 'Full Service Package',
          navButton: true
        }
      ]
    },
    cards: [
      {
        title: 'Career Discovery Package',
        body: [
          ['Initial Interview + Goal Capture', 'Work Deep Dive', 'Psycho-Ed', 'Action Planning'],
          'Includes 4 hours of 1-on-1 coaching sessions, unlimited text & email support, recorded & transcribed session notes, evidence based Values/Skills/Strengths/Interests inventories by certified practitioners, career discovery & clarification, detailed personal assessment package, resume/cover letter/LinkedIn review & strategy, social media audit, personal narrative development, career path planning & strategy.'
        ],
        price: 950,
        footer:
          'All of our candidate services include lifetime support & check-ins. We invest in you for the long term.'
      },
      {
        title: 'Immediate Employment',
        body: [
          ['Work Deep Dive', 'Action Planning', 'Action Plan Kickoff + LinkedIn Training'],
          'Includes 5 hours of 1-on-1 coaching sessions, unlimited text & email support goal setting, motivation & accountability, recorded & transcribed session notes, detailed personal assessment package, resume/cover letter/LinkedIn review & strategy, social media audit, personal narrative development, career path planning & strategy.'
        ],
        price: 1185,
        footer:
          'All of our candidate services include lifetime support & check-ins. We invest in you for the long term.'
      },
      {
        title: 'Full Service Package',
        body: [
          [
            'Initial Interview + Goal Capture',
            'Work Deep Dive',
            'Psycho-Ed',
            'Action Planning',
            'Action Plan Kickoff + LinkedIn Training',
            'Networking Tactics',
            'Interview & Negotiation Training + Roleplay',
            'Company Research and Job Presentations',
            'Active Opportunity Coaching',
            'Career Technology Mapping',
            'Post Placement Analysis'
          ],
          'Includes 12+ hours of 1-on-1 coaching sessions, unlimited text & email support, career discovery & clarification, goal setting, motivation & accountability, recorded & transcribed session notes, detailed personal assessment package, resume/cover letter/LinkedIn review & strategy, social media audit, personal narrative development, career path planning & strategy, etc. '
        ],
        price: 3500,
        footer:
          'Additional hours available a la carte. Choose any above service and inquire for pricing. All of our candidate services include lifetime support & check-ins. We invest in you for the long term.'
      }
    ]
  };
  render() {
    const { subNav, cards } = this.state;
    const { routes } = subNav;
    const subNavRoutes = routes.map((route, i) => (
      <Route key={i} exact path={route.path} component={route.component} />
    ));
    const allCards = cards.map((card, i) => (
      <Card title={card.title} body={card.body} price={card.price} footer={card.footer} />
    ));
    return (
      <div>
        <Nav routes={routes} />
        {subNavRoutes}
        {allCards}
      </div>
    );
  }
}
