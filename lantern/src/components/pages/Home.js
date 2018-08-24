import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from '../molecules';

export default class Home extends Component {
  state = {
    cards: [
      {
        title: 'Who We Are',
        body: [
          'We are you.',
          'We are job seekers, we are employees, we are employers. We have been stuck, we have wanted more.',
          'We are experienced recruiters, hiring managers, business builders, scientists, coaches and therapists.'
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
        <p>
          <em>
            "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will
            live its whole life believing that it is stupid."
          </em>
          <br />- Albert Einstein
        </p>
        <Card title={title} body={body} />
      </div>
    );
  }
}
