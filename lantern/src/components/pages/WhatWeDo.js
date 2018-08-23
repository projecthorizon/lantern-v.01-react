import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../molecules';

export default class WhatWeDo extends Component {
  state = {
    cards: [
      {
        title: 'What We Do',
        body: [
          'We help people and firms gain a clear and accurate picture of their values, skills, interests and potential. From there we help by:',
          [
            'Teaching the skills needed to succeed',
            'Designing a plan of action',
            'Coaching through execution',
            'Providing long term placement aftercare/planning/support'
          ],
          'We combine the best in process, technology, network and real life experience. It is in our best interest to commit to your long term success. Building and maintaining a deep relationship focused on your success is the best way to achieve our goals.'
        ]
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
