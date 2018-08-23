import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../molecules';

export default class WhyWeExist extends Component {
  state = {
    cards: [
      {
        title: 'Why We Exist',
        body: [
          'We exist because of you, because of our experience being you.',
          'Pain is inevitable, suffering is not. We want to relieve you of the suffering we have experienced on our own career journeys and propel you towards successfully achieving your ambitions. By doing this we believe we can help people live happier, more fulfilled, more productive lives at work, at home and in your community.'
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
