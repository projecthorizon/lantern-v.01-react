import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextBody } from '../atoms';

const StyledCard = styled.div`
  display: ${({ isHidden }) => 'none' || 'flex'};
  flex-direction: column;
  padding: 10px;
  width: 50%;
  background: lightgoldenrodyellow;
`;

export default class Card extends PureComponent {
  createUl(arr) {
    const lis = arr.map((li, i) => <li key={i}>{li}</li>);
    return <ul key="cardUl">{lis}</ul>;
  }

  render() {
    const { title, body, price, footer } = this.props;
    const paragraphs = body.map((p, i) => {
      return !Array.isArray(p) ? <TextBody key={i} text={p} /> : this.createUl(p);
    });
    return price ? (
      <StyledCard>
        <h3>{title}</h3>
        {paragraphs}
        <p>Price: ${price}</p>
        <p>
          <em>{footer}</em>
        </p>
      </StyledCard>
    ) : (
      <StyledCard>
        <h3>{title}</h3>
        {paragraphs}
      </StyledCard>
    );
  }
}
