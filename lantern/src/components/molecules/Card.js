import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SubHeader, TextBody } from '../atoms';

const StyledCard = styled.div`
  padding: 10px;
  width: 50%;
  background: lightgoldenrodyellow;
`;

export default class Card extends PureComponent {
  render() {
    const { title, body, price, footer } = this.props;
    return (
      <StyledCard>
        <h3>{title}</h3>
        <p>{body}</p>
        <p>Price: ${price}</p>
        <p>
          <em>{footer}</em>
        </p>
      </StyledCard>
    );
  }
}
