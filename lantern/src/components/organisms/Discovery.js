import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../molecules';

export default class Discovery extends Component {
  state = {
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
