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
          navButton: true,
          cardNums: [1]
        },
        {
          path: '#',
          component: null,
          text: 'Immediate Employment',
          navButton: true,
          cardNums: [2]
        },
        {
          path: '#',
          component: null,
          text: 'Full Service Package',
          navButton: true,
          cardNums: [3]
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
          'All of our candidate services include lifetime support & check-ins. We invest in you for the long term.',
        isHidden: true,
        cardNum: 1
      },
      {
        title: 'Immediate Employment',
        body: [
          ['Work Deep Dive', 'Action Planning', 'Action Plan Kickoff + LinkedIn Training'],
          'Includes 5 hours of 1-on-1 coaching sessions, unlimited text & email support goal setting, motivation & accountability, recorded & transcribed session notes, detailed personal assessment package, resume/cover letter/LinkedIn review & strategy, social media audit, personal narrative development, career path planning & strategy.'
        ],
        price: 1185,
        footer:
          'All of our candidate services include lifetime support & check-ins. We invest in you for the long term.',
        isHidden: true,
        cardNum: 2
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
          'Additional hours available a la carte. Choose any above service and inquire for pricing. All of our candidate services include lifetime support & check-ins. We invest in you for the long term.',
        isHidden: true,
        cardNum: 3
      }
    ]
  };

  toggleCards(e, cardNumArr) {
    e.preventDefault();
    const updatedCards = this.state.cards.forEach(
      card => (cardNumArr.includes(card.cardNum) ? (card.isHidden = false) : (card.isHidden = true))
    );
    this.setState({
      updatedCards
    });
    console.log(this.state, 'clicked!');
  }

  render() {
    const { subNav, cards } = this.state;
    const { routes } = subNav;
    const subNavRoutes = routes.map((route, i) => (
      <Route key={i} exact path={route.path} component={route.component} />
    ));
    const allCards = cards.map((card, i) => (
      <Card key={i} title={card.title} body={card.body} price={card.price} footer={card.footer} />
    ));
    return (
      <div>
        <Nav routes={routes} handleClick={this.toggleCards.bind(this)} />
        {subNavRoutes}
        {allCards}
      </div>
    );
  }
}
