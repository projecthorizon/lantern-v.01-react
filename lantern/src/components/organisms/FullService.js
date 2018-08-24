import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../molecules';

export default class FullService extends Component {
  state = {
    cards: [
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
    const {
      cards: [card]
    } = this.state;
    const { title, body } = card;
    return (
      <div>
        <Card title={title} body={body} />
      </div>
    );
  }
}
