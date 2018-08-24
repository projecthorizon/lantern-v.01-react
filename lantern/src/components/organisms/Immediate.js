import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../molecules';

export default class Immediate extends Component {
  state = {
    cards: [
      {
        title: 'Immediate Employment',
        body: [
          ['Work Deep Dive', 'Action Planning', 'Action Plan Kickoff + LinkedIn Training'],
          'Includes 5 hours of 1-on-1 coaching sessions, unlimited text & email support goal setting, motivation & accountability, recorded & transcribed session notes, detailed personal assessment package, resume/cover letter/LinkedIn review & strategy, social media audit, personal narrative development, career path planning & strategy.'
        ],
        price: 1185,
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
